import { loadArticles, plainText, reportHeader, sentences, writeReport } from './article-review-utils.mjs';

const genericPhrases = [
  'in today\'s rapidly evolving landscape',
  'it is important to note',
  'delve into',
  'game changer',
  'unlock the power',
  'revolutionize',
  'at the end of the day',
  'in conclusion',
  'seamlessly',
  'robust solution',
];

const articles = (await loadArticles()).filter((article) => article.meta.draft !== 'true');
const reports = [];

for (const article of articles) {
  const text = plainText(article.body);
  const articleSentences = sentences(article.body);
  const phrases = genericPhrases.filter((phrase) => text.toLowerCase().includes(phrase));
  const longSentences = articleSentences.filter((sentence) => sentence.split(/\s+/).length > 35);
  const passiveCandidates = articleSentences.filter((sentence) => /\b(?:is|are|was|were|be|been|being)\s+(?:\w+ly\s+)?\w+(?:ed|en)\b/i.test(sentence));
  const contractions = (text.match(/\b(?:I\'m|I\'ve|don\'t|can\'t|won\'t|it\'s|that\'s|we\'re|I\'d)\b/gi) || []).length;
  const personalSignals = (text.match(/\b(?:I|my|we|our)\b/g) || []).length;

  reports.push(`${reportHeader('Humanisation check', article)}\n\nThis is a pattern review, not an AI detector. It highlights writing habits that can make a genuine article feel synthetic.\n\n- ${phrases.length ? `△ Generic phrases: ${phrases.join(', ')}` : '✓ No common generic AI phrases found'}\n- ${longSentences.length ? `△ ${longSentences.length} sentence(s) exceed 35 words` : '✓ Sentence length stays conversational'}\n- ${passiveCandidates.length ? `△ ${passiveCandidates.length} possible passive construction(s); review rather than remove automatically` : '✓ No obvious passive-voice pattern found'}\n- ${personalSignals ? `✓ ${personalSignals} first-person signal(s) keep the perspective personal` : '△ No first-person perspective found'}\n- ${contractions ? `✓ ${contractions} natural contraction(s)` : '△ Consider a few natural contractions where they fit your voice'}\n\nBefore publishing, read the opening and ending aloud. Keep Indian English expressions that sound natural to you; remove only language you would not use in a real conversation.`);
}

if (!articles.length) reports.push('# Humanisation check\n\nNo published Markdown articles were found.');
await writeReport('humanisation-check.md', reports.join('\n\n---\n\n'));
