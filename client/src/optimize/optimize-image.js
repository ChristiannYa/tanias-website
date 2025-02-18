import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join, basename, extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(
  __dirname,
  '../assets/images/headshots/ralph-shirt.jpeg'
);
const sizes = [1920, 1280, 768];
const quality = 80;

async function optimizeImage() {
    const name = basename(inputPath, extname(inputPath));
    const directory = dirname(inputPath);

    for (const size of sizes) {
        const outputPath = join(directory, `${name}-${size}${extname(inputPath)}`);
        await sharp(inputPath)
            .resize(size, null, { withoutEnlargement: true })
            .jpeg({ quality })
            .toFile(outputPath);
        console.log(`Optimized: ${outputPath}`);
    }
}

optimizeImage().catch(console.error);
