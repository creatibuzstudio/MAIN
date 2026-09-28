import Hero from "../components/landing/banner/Hero";
import Cta from "../components/landing/banner/Cta";
import Partners from "../components/landing/partners/page";
import AboutUs from "../components/landing/aboutus/page";
import OurService from "../components/landing/ourService/page";
import ProcessSection from "../components/landing/process/ProcessSection";
import AiSection from "../components/landing/ai/AiSection";
import ComparisonSection from "../components/landing/comparison/ComparisonSection";
import PricingSection from "../components/landing/pricing/PricingSection";
import CaseStudies from "../components/landing/casestudies/page";
import ConcentricCtaSection from "../components/landing/cta/ConcentricCtaSection";
import MeetSpecialistSection from "../components/landing/team/MeetSpecialistSection";
import FaqSection from "../components/landing/faq/FaqSection";
import BlogSection from "../components/landing/blog/BlogSection";
import ContactSection from "../components/landing/contact/ContactSection";
import TestimonialsSection from "../components/landing/testimonials/TestimonialsSection";
import SectionContainer from "../components/ui/SectionContainer";
import FeatureWorks from "../components/featureWork/page";
import WorkMarqueeSection from "../components/landing/marquee/WorkMarqueeSection";
import Feature from "../components/landing/feature/feature";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background text-primary-text flex flex-col justify-between overflow-hidden">
      <Hero />

      <SectionContainer extendTopBorder={true}>
        <Partners />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <AboutUs />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <OurService />
      </SectionContainer>

      <FeatureWorks />

      <ProcessSection />

      <SectionContainer extendTopBorder={false}>
        <AiSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <ComparisonSection />
      </SectionContainer>

      <WorkMarqueeSection />

      <SectionContainer extendTopBorder={false} noPadding={true}>
        <PricingSection />
      </SectionContainer>

      <ConcentricCtaSection />

      <SectionContainer extendTopBorder={false}>
        <BlogSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <MeetSpecialistSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <FaqSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <ContactSection />
      </SectionContainer>

      <TestimonialsSection />

      <SectionContainer extendTopBorder={false}>
        <Feature />
      </SectionContainer>
    </div>
  );
}
