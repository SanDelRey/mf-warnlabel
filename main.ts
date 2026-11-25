import { mkdirSync, writeFileSync } from 'node:fs';
// one line, exactly as the judge reads it
const LINE = 'WARNING: This unit has no undo. Every decision made after 11 p.m. is permanent and will later be defended as intentional.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
