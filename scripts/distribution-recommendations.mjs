import { loadArticles, plainText, reportHeader, writeReport } from './article-review-utils.mjs';

const articles = (await loadArticles()).filter((article) => article.meta.draft !== 'true');
const reports = [];

for (const article of articles) {
  const topicTags = (article.meta.topic || '').split(/[+,&]/).map((tag) => tag.trim()).filter(Boolean);
  const body = plainText(article.body);
  const inferred = [
    ['Site Reliability Engineering', /\bSRE|reliability|SLO|SLI\b/i],
    ['DevOps', /\bDevOps|CI\/CD|delivery\b/i],
    ['Artificial Intelligence', /\bAI|agent|model\b/i],
    ['Platform Engineering', /\bplatform\b/i],
    ['Cloud Computing', /\bcloud\b/i],
    ['Engineering Leadership', /\bleader|team|organisation|organization\b/i],
    ['FinOps', /\bFinOps|cost|budget\b/i],
  ].filter(([, pattern]) => pattern.test(body)).map(([tag]) => tag);
  const tags = [...new Set([...topicTags, ...inferred])].slice(0, 5);
  const url = `https://rafiquesyed.in/writing/${article.slug}`;
  const hook = article.meta.marginNote || article.meta.description;

  reports.push(`${reportHeader('Distribution recommendations', article)}\n\n## Recommended title\n\n${article.meta.title}\n\n## Suggested tags\n\n${tags.map((tag) => `- ${tag}`).join('\n')}\n\n## LinkedIn post\n\n${hook}\n\nI wrote this field note from the point of view of someone who has spent years working close to delivery, reliability and operational problems. The technology keeps changing, but the engineering questions underneath it are often familiar.\n\nMy practical take: ${article.meta.description}\n\nRead it here: ${url}\n\nWhat are you seeing in your own teams?\n\n${tags.slice(0, 3).map((tag) => `#${tag.replace(/[^a-z0-9]/gi, '')}`).join(' ')}\n\n## Publication approach\n\n- Publish on rafiquesyed.in first; this remains the canonical home.\n- Republish on Medium after the website version is live and set the canonical URL to ${url}.\n- Share the LinkedIn post with one personal observation rather than only the article link.\n- Revisit the article after discussion and add any genuinely useful reader questions.`);
}

if (!articles.length) reports.push('# Distribution recommendations\n\nNo published Markdown articles were found. Add an article with `draft: false` to generate its distribution kit.');
const destination = await writeReport('distribution-kit.md', reports.join('\n\n---\n\n'));
if (process.env.GITHUB_STEP_SUMMARY) {
  const { appendFile } = await import('node:fs/promises');
  await appendFile(process.env.GITHUB_STEP_SUMMARY, await (await import('node:fs/promises')).readFile(destination, 'utf8'));
}
