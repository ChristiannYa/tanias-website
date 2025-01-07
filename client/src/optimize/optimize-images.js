import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join, basename, extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../assets/images/packages');
const sizes = [1920, 1280, 768];
const quality = 80;

async function optimizeImages() {
    const files = await readdir(inputDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = join(inputDir, file);
            const name = basename(file, extname(file));

            for (const size of sizes) {
                const outputPath = join(inputDir, `${name}-${size}${extname(file)}`);
                await sharp(inputPath)
                    .resize(size, null, { withoutEnlargement: true })
                    .jpeg({ quality })
                    .toFile(outputPath);
                console.log(`Optimized: ${outputPath}`);
            }
        }
    }
}

optimizeImages().catch(console.error);
