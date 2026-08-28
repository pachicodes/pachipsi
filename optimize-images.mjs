import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';

const ASSETS_DIR = './assets';
const QUALITY_WEBP = 82;

// Responsive widths for srcset (hero and general use)
const SRCSET_WIDTHS = [400, 640, 800, 1024, 1254];

const pngFiles = ['eu.png', 'dreamy.png', 'INSPO.png', 'intercultural_space.png'];

async function optimizeImage(filename) {
  const inputPath = join(ASSETS_DIR, filename);
  const { name } = parse(filename);

  const metadata = await sharp(inputPath).metadata();
  const originalStat = await stat(inputPath);
  const originalKB = (originalStat.size / 1024).toFixed(0);

  console.log(`\n── ${filename} ──`);
  console.log(`   Original: ${metadata.width}×${metadata.height}, ${originalKB} KB`);

  // Full-size WebP
  const fullWebP = join(ASSETS_DIR, `${name}.webp`);
  const fullInfo = await sharp(inputPath)
    .webp({ quality: QUALITY_WEBP, effort: 6 })
    .toFile(fullWebP);
  console.log(`   → ${name}.webp: ${(fullInfo.size / 1024).toFixed(0)} KB (${((1 - fullInfo.size / originalStat.size) * 100).toFixed(0)}% smaller)`);

  // Responsive variants (only generate sizes smaller than original)
  for (const w of SRCSET_WIDTHS) {
    if (w >= metadata.width) continue;
    const resizedPath = join(ASSETS_DIR, `${name}-${w}w.webp`);
    const resizedInfo = await sharp(inputPath)
      .resize(w)
      .webp({ quality: QUALITY_WEBP, effort: 6 })
      .toFile(resizedPath);
    console.log(`   → ${name}-${w}w.webp: ${(resizedInfo.size / 1024).toFixed(0)} KB`);
  }
}

async function main() {
  console.log('🖼  Otimizando imagens para WebP + variantes responsivas...\n');

  for (const file of pngFiles) {
    try {
      await optimizeImage(file);
    } catch (err) {
      console.error(`   ✗ Erro em ${file}: ${err.message}`);
    }
  }

  console.log('\n✓ Concluído. Originais PNG preservados como fallback.');
}

main();
