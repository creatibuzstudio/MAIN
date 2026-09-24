"use client";

import React, { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card relative w-full box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  bottomOffset?: number;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  innerClassName = "",
  itemDistance = 750,
  itemScale = 0.05,
  itemStackDistance = 22,
  stackPosition = "70px",
  scaleEndPosition = "5%",
  baseScale = 1.0,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  bottomOffset = 60,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTopsRef = useRef<number[]>([]);
  const cardHeightsRef = useRef<number[]>([]);
  const endElementTopRef = useRef<number>(0);
  const lastTransformsRef = useRef<Map<number, any>>(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop <= start) return 0;
      if (scrollTop >= end) return 1;
      return (scrollTop - start) / (end - start);
    },
    [],
  );

  const parsePosition = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string") {
        if (value.includes("%")) {
          return (parseFloat(value) / 100) * containerHeight;
        }
        if (value.includes("vh")) {
          return (parseFloat(value) / 100) * containerHeight;
        }
        if (value.includes("px")) {
          return parseFloat(value);
        }
      }
      return parseFloat(value as string);
    },
    [],
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  // Robust untransformed card top and height measurements
  const measureCardTops = useCallback(() => {
    if (!cardsRef.current.length) return;

    if (useWindowScroll) {
      cardTopsRef.current = cardsRef.current.map((card, idx) => {
        const rect = card.getBoundingClientRect();
        const currentTranslateY =
          lastTransformsRef.current.get(idx)?.translateY ?? 0;
        return rect.top + window.scrollY - currentTranslateY;
      });

      cardHeightsRef.current = cardsRef.current.map((card) => {
        return card.offsetHeight || card.getBoundingClientRect().height;
      });

      const endEl = document.querySelector(".scroll-stack-end") as HTMLElement | null;
      if (endEl) {
        endElementTopRef.current = endEl.getBoundingClientRect().top + window.scrollY;
      }
    } else {
      cardTopsRef.current = cardsRef.current.map((card) => card.offsetTop);
      cardHeightsRef.current = cardsRef.current.map((card) => card.offsetHeight);
      const endEl = scrollerRef.current?.querySelector(".scroll-stack-end") as HTMLElement | null;
      if (endEl) {
        endElementTopRef.current = endEl.offsetTop;
      }
    }
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const defaultStackTop = parsePosition(stackPosition, containerHeight);

    // Calculate unpin point: release cleanly shortly after the last card stacks
    const lastIdx = cardsRef.current.length - 1;
    const lastCardTop = cardTopsRef.current[lastIdx] ?? 0;
    const lastCardHeight = cardHeightsRef.current[lastIdx] ?? 0;
    const lastTargetTop = Math.min(
      defaultStackTop,
      containerHeight - lastCardHeight - bottomOffset
    ) + itemStackDistance * lastIdx;
    const lastPinStart = lastCardTop - lastTargetTop;
    const pinEnd = lastPinStart + 250; // 250px reading pause after full stack, then seamless release

    const scaleStep = itemScale > 0 ? itemScale : 0.05;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardTopsRef.current[i] ?? 0;
      const cardHeight = cardHeightsRef.current[i] ?? 0;

      // Base target top ensuring bottom is visible if card is tall
      const baseTargetTop = Math.min(
        defaultStackTop,
        containerHeight - cardHeight - bottomOffset
      );

      // Staggered top offset so earlier cards peek out at the top behind subsequent cards
      const targetTop = baseTargetTop + itemStackDistance * i;
      const pinStart = cardTop - targetTop;

      // Stepped card scaling: starts scaling down when the next card scrolls into the middle of the screen
      let scale = 1.0;
      for (let j = i + 1; j < cardsRef.current.length; j++) {
        const jCardTop = cardTopsRef.current[j] ?? 0;
        const jCardHeight = cardHeightsRef.current[j] ?? 0;
        const jBaseTargetTop = Math.min(
          defaultStackTop,
          containerHeight - jCardHeight - bottomOffset
        );
        const jTargetTop = jBaseTargetTop + itemStackDistance * j;
        const jPinStart = jCardTop - jTargetTop;

        // When the top of card j reaches the vertical middle of the screen (containerHeight / 2),
        // card i starts scaling down until card j reaches its final pinned position
        const jMiddleOfScreen = jCardTop - containerHeight / 2;
        const scaleStart = Math.min(jMiddleOfScreen, jPinStart - 100);

        const stackProgress = calculateProgress(
          scrollTop,
          scaleStart,
          jPinStart
        );
        scale -= scaleStep * stackProgress;
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + targetTop;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + targetTop;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.002;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        card.style.transform = transform;
        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    stackPosition,
    bottomOffset,
    itemScale,
    itemStackDistance,
    onStackComplete,
    calculateProgress,
    parsePosition,
    getScrollData,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });

      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });

      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useIsomorphicLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? []),
    ) as HTMLElement[];
    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    // Apply continuous scroll space between cards and stacked z-index
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      } else {
        card.style.marginBottom = "0px";
      }
      card.style.zIndex = `${10 + i}`;
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
      card.style.webkitTransform = "translateZ(0)";
    });

    measureCardTops();

    setupLenis();

    const handleResize = () => {
      measureCardTops();
      updateCardTransforms();
    };

    if (useWindowScroll) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleResize);
    }

    // Secondary measurements after images and fonts render
    const timer1 = setTimeout(() => {
      measureCardTops();
      updateCardTransforms();
    }, 300);

    const timer2 = setTimeout(() => {
      measureCardTops();
      updateCardTransforms();
    }, 1200);

    updateCardTransforms();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (useWindowScroll) {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardTopsRef.current = [];
      cardHeightsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    useWindowScroll,
    setupLenis,
    measureCardTops,
    updateCardTransforms,
    handleScroll,
  ]);

  return (
    <div
      className={`relative w-full ${
        useWindowScroll ? "overflow-visible h-auto" : "h-full overflow-y-auto"
      } overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        scrollBehavior: "smooth",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        willChange: "scroll-position",
      }}
    >
      <div
        className={`scroll-stack-inner pt-0 px-0 pb-30 md:pb-38 lg:pb-46 ${innerClassName}`.trim()}
      >
        {children}
        {/* Clean end element without artificial height */}
        <div className="scroll-stack-end w-full h-px pointer-events-none" />
      </div>
    </div>
  );
};

export default ScrollStack;
