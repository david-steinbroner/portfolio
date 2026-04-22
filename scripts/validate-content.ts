import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { ProjectMetadataSchema, LetterMetadataSchema } from '../lib/schema';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'content');
const checks = [
  { dir: 'case-studies', schema: ProjectMetadataSchema },
  { dir: 'features', schema: ProjectMetadataSchema },
  { dir: 'letters', schema: LetterMetadataSchema },
];
let fails = 0;
for (const { dir, schema } of checks) {
  for (const file of readdirSync(join(ROOT, dir))) {
    if (!file.endsWith('.md')) continue;
    const raw = readFileSync(join(ROOT, dir, file), 'utf8');
    const { data } = matter(raw);
    const res = schema.safeParse(data);
    if (!res.success) {
      fails++;
      console.log(`FAIL ${dir}/${file}`);
      for (const issue of res.error.issues) console.log(`    ${issue.path.join('.')}: ${issue.message}`);
    } else {
      console.log(`PASS ${dir}/${file}`);
    }
  }
}
console.log(`\n${fails} failed`);
