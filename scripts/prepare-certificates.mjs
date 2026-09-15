import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'assets', 'certificados');
const outDir = path.join(srcDir, 'web');

const casaDoSaberFiles = [
  'certificado-casa-do-saber-inconsciente.png',
  'certificado-casa-do-saber-freud.png',
  'certificado-casa-do-saber-humor.png',
  'certificado-casa-do-saber-feminismo.png',
];

const publicFiles = [
  { src: 'certificado-sintra-psicanalise.jpg', out: 'certificado-sintra-psicanalise-web.jpg', casaDoSaber: false },
  ...casaDoSaberFiles.map((file) => ({
    src: file,
    out: file.replace(/\.(png|jpe?g)$/i, '-web.png'),
    casaDoSaber: true,
  })),
];

async function processCasaDoSaber(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();
  const cropHeight = Math.floor(height * 0.66);
  const cpfTop = Math.floor(height * 0.17);
  const cpfHeight = Math.floor(height * 0.14);

  const redactSvg = Buffer.from(
    `<svg width="${width}" height="${cpfHeight}">
      <rect width="100%" height="100%" fill="#f1f0ec"/>
    </svg>`
  );

  await sharp(inputPath)
    .extract({ left: 0, top: 0, width, height: cropHeight })
    .composite([
      { input: redactSvg, top: cpfTop, left: 0 },
      { input: redactSvg, top: cpfTop + Math.floor(cpfHeight * 0.45), left: 0 },
    ])
    .png({ quality: 88, compressionLevel: 9 })
    .toFile(outputPath);
}

async function processSintra(inputPath, outputPath) {
  await sharp(inputPath)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outputPath);
}

await mkdir(outDir, { recursive: true });

for (const file of publicFiles) {
  const inputPath = path.join(srcDir, file.src);
  const outputPath = path.join(outDir, file.out);
  if (file.casaDoSaber) {
    await processCasaDoSaber(inputPath, outputPath);
  } else {
    await processSintra(inputPath, outputPath);
  }
  console.log(`Created ${file.out}`);
}
