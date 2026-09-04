# rafiquesyed.in

Source for [rafiquesyed.in](https://rafiquesyed.in), Rafique Syed's personal site and field-note archive. The application is a Vinext/React site packaged with Docker and hosted on Google Cloud Run.

## Add a new article

1. Copy `content/articles/_template.md` to a descriptive filename such as `what-reliability-really-means.md`.
2. Write the article in Markdown.
3. Keep `draft: true` while working.
4. Change it to `draft: false` when it is ready.
5. Run `npm run build` to validate it.
6. Commit and push to `main`.

The filename becomes the public URL, the article is rendered using the site's editorial design, and its card is added to `/writing` automatically.

```bash
cp content/articles/_template.md content/articles/your-article-slug.md
npm run build
git add content/articles/your-article-slug.md
git commit -m "Publish your article title"
git push github main
```

See [content/articles/README.md](content/articles/README.md) for the supported Markdown format.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Editorial and publishing workflow

Pull requests run the first three stages. A merge or direct push to `main` runs all four in sequence:

1. **Style and voice** compares sentence rhythm, personal perspective and article structure with the existing field notes.
2. **Humanisation** flags generic AI phrases, likely passive constructions and overly long sentences. It is a writing-pattern review, not an unreliable claim that it can identify who wrote the text.
3. **Distribution kit** produces suggested tags, a LinkedIn post and publication guidance as a downloadable workflow artifact and job summary.
4. **Publish** validates the site, builds the Docker container, deploys `rafique-syed-site` to Google Cloud Run and checks the public URL.

Run the first three stages locally with:

```bash
npm run articles:review
```

The workflow uses keyless Google Cloud authentication. Configure these GitHub repository variables once:

| Variable | Purpose |
| --- | --- |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Full Google Workload Identity provider resource name |
| `GCP_SERVICE_ACCOUNT` | Deployment service-account email |

The Google identity provider must only trust the `rafique586/rafiquesyed.in` repository. The deployment identity needs Cloud Run deployment, Artifact Registry writing, Cloud Build and service-account usage permissions.

For manual publishing, verification, rollback and troubleshooting, see [DEPLOYMENT-RUNBOOK.md](DEPLOYMENT-RUNBOOK.md).

## Repository layout

```text
app/                       Site pages and styles
content/articles/          Markdown field notes
lib/generated-articles.ts  Build-generated article manifest
scripts/                   Article build tooling
.github/workflows/         Automatic Cloud Run publication workflow
```

The two original field notes remain handcrafted pages under `app/writing/` because they contain custom editorial visuals. Future standard articles belong in `content/articles/`.
