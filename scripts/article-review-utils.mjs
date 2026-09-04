import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const articlesDirectory = path.join(root, 'content', 'articles');
const outputDirectory = path.join(root, 'review-output');

export function parseArticle(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error(`${filename}: missing front matter`);
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    meta[key] = value;
  }
  return { filename, slug: filename.replace(/\.md$/, ''), meta, body: match[2].trim() };
}

export async function loadArticles() {
  const filenames = (await readdir(articlesDirectory))
    .filter((name) => name.endsWith('.md') && !name.startsWith('_') && name !== 'README.md')
    .sort();
  return Promise.all(filenames.map(async (filename) => parseArticle(await readFile(path.join(articlesDirectory, filename), 'utf8'), filename)));
}

export async function loadLegacyVoice() {
  const files = [
    'app/writing/software-configuration-management-still-matters/page.tsx',
    'app/writing/context-window-is-a-budget/page.tsx',
  ];
  const passages = [];
  for (const file of files) {
    const source = await readFile(path.join(root, file), 'utf8');
    for (const match of source.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)) {
      passages.push(match[1].replace(/<[^>]+>/g, ' ').replace(/[{}]/g, ' '));
    }
  }
  return plainText(passages.join(' '));
}

export function plainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function sentences(markdown) {
  return plainText(markdown).split(/(?<=[.!?])\s+/).filter(Boolean);
}

export async function writeReport(filename, content) {
  await mkdir(outputDirectory, { recursive: true });
  const destination = path.join(outputDirectory, filename);
  await writeFile(destination, `${content.trim()}\n`);
  console.log(content.trim());
  return destination;
}

export function reportHeader(title, article) {
  return `# ${title}\n\nArticle: **${article.meta.title || article.filename}**  \nFile: \`${article.filename}\``;
}
