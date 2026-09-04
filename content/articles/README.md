# Adding an article

1. Copy `_template.md` to a new lowercase, hyphenated filename, for example `why-error-budgets-matter.md`.
2. Edit the front matter and article text.
3. Keep `draft: true` while writing.
4. Change it to `draft: false` when the article is ready.
5. Run `npm run build` and open the article at `/writing/<filename-without-.md>`.
6. Commit and push to `main`. The GitHub workflow publishes the site to Cloud Run after its one-time Google Cloud authentication setup is complete.

The article is added to the writing archive automatically. No React page or archive list needs to be edited.

## Supported Markdown

- Paragraphs
- `##` and `###` headings
- Numbered and bulleted lists
- Blockquotes
- Bold and italic text
- Inline code and fenced code blocks
- Internal and HTTPS links

Files beginning with `_` and `README.md` are ignored. Draft articles are also excluded from the site.
