import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT = 'WARNING: This unit has no undo. Every decision made after 11 p.m. is permanent and will later be defended as intentional.';
const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(dir, { recursive: true });
// one line out, and a newline so the file is a text file
writeFileSync(`${dir}/entry.txt`, `${TEXT}\n`);
