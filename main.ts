import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const srcPath = join(dir, 'entry.png');
if (!existsSync(srcPath)) {
  throw new Error(`Missing source image at ${srcPath}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, join(outDir, 'entry.png'));
