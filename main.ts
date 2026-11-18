// Node 22, standard library only.
// Read entry.png beside this module and write its bytes unchanged to
// $MAKEFUN_OUTPUT_DIR/entry.png, or /output/entry.png when the variable is unset.
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
