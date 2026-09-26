import fs from 'fs/promises';
import path from 'path';

async function checkDir(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.next')) {
      await checkDir(fullPath);
    } else if (file.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts'))) {
      const content = await fs.readFile(fullPath, 'utf8');
      const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.')) {
          const resolvedPath = path.resolve(path.dirname(fullPath), importPath);
          try {
            // Check if file exists exactly as typed
            const dirName = path.dirname(resolvedPath);
            const baseName = path.basename(resolvedPath);
            const actualFiles = await fs.readdir(dirName);
            
            // Check if an exact match exists (with or without extension)
            const exactMatch = actualFiles.find(f => f === baseName || f === baseName + '.tsx' || f === baseName + '.ts');
            
            if (!exactMatch) {
              // Try case-insensitive match
              const looseMatch = actualFiles.find(f => f.toLowerCase() === baseName.toLowerCase() || f.toLowerCase() === (baseName + '.tsx').toLowerCase());
              if (looseMatch) {
                console.log(`Case mismatch in ${fullPath}: imported '${importPath}' but actual file/folder is '${looseMatch}'`);
              }
            }
          } catch (e) {
             // Ignored
          }
        }
      }
    }
  }
}

checkDir('./app').catch(console.error);
