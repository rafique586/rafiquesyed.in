import { loadArticles, loadLegacyVoice, plainText, reportHeader, sentences, writeReport } from './article-review-utils.mjs';

const articles = (await loadArticles()).filter((article) => article.meta.draft !== 'true');
const legacyVoice = await loadLegacyVoice();
const legacySentences = sentences(legacyVoice);
const legacyAverageSentence = Math.round(legacySentences.reduce((sum, sentence) => sum + sentence.split(/\s+/).length, 0) / Math.max(legacySentences.length, 1));
const legacyPersonalRate = ((legacyVoice.match(/\b(?:I|my|we|our)\b/gi) || []).length / Math.max(legacyVoice.split(/\s+/).length, 1)) * 100;
const reports = [];
let failures = 0;

for (const article of articles) {
  const headings = [...article.body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1]);
  const paragraphs = article.body.split(/\n\s*\n/).filter((block) => !block.startsWith('#') && !block.startsWith('>') && !/^\d+\./.test(block));
  const opening = paragraphs[0] || '';
  const closing = paragraphs.at(-1) || '';
  const articleText = plainText(article.body);
  const articlePersonalRate = ((articleText.match(/\b(?:I|my|we|our)\b/gi) || []).length / Math.max(articleText.split(/\s+/).length, 1)) * 100;
  const articleSentences = sentences(article.body);
  const averageSentence = Math.round(articleSentences.reduce((sum, sentence) => sum + sentence.split(/\s+/).length, 0) / Math.max(articleSentences.length, 1));
  const checks = [
    ['A specific, human opening', /\b(I|we|my|our)\b/i.test(opening) && opening.split(/\s+/).length >= 12],
    ['A clear editorial structure', headings.length >= 2 && headings.length <= 8],
    ['Readable paragraph rhythm', paragraphs.every((paragraph) => paragraph.split(/\s+/).length <= 130)],
    ['A memorable line or blockquote', /^>\s+/m.test(article.body) || /\*\*[^*]{12,}\*\*/.test(article.body)],
    ['A personal conclusion', /\b(I|we|you|my|our|your)\b/i.test(closing)],
    ['Sentence rhythm resembles the existing field notes', Math.abs(averageSentence - legacyAverageSentence) <= 8],
    ['Personal perspective resembles the existing field notes', articlePersonalRate >= Math.max(0.4, legacyPersonalRate * 0.35)],
  ];
  const score = checks.filter(([, passed]) => passed).length;
  if (score < 5) failures += 1;
  reports.push(`${reportHeader('Style and voice check', article)}\n\nVoice score: **${score}/7**\n\n${checks.map(([label, passed]) => `- ${passed ? '✓' : '△'} ${label}`).join('\n')}\n\n## Comparison with the existing articles\n\n| Signal | New article | Existing field notes |\n| --- | ---: | ---: |\n| Average sentence length | ${averageSentence} words | ${legacyAverageSentence} words |\n| First-person voice | ${articlePersonalRate.toFixed(1)}% | ${legacyPersonalRate.toFixed(1)}% |\n| Section headings | ${headings.length} | — |\n\nThe target voice is practical, first-hand and calm: one lived observation, a clear engineering idea, useful guidance, and a closing line worth remembering.`);
}

if (!articles.length) reports.push('# Style and voice check\n\nNo published Markdown articles were found. Handcrafted legacy articles remain the editorial reference.');
await writeReport('style-check.md', reports.join('\n\n---\n\n'));
if (failures) process.exitCode = 1;
