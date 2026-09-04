# Publishing rafiquesyed.in to Google Cloud Run

Use this runbook after adding or updating an article or making another website change. The site is built as a Docker container from the repository and deployed to Google Cloud Run.

## Deployment details

| Setting | Value |
| --- | --- |
| Google Cloud project | `rafiquesyed` |
| Cloud Run service | `rafique-syed-site` |
| Region | `asia-southeast1` |
| Container port | `3000` |
| Public site | `https://rafiquesyed.in` |

The domain mapping and DNS records are already configured. A routine release does not require recreating them.

## Quick publish

From the site directory:

```bash
cd ~/Documents/Codex/2026-08-30/referenced-chatgpt-conversation-this-is-an/work/personal-site

npm run build

gcloud run deploy rafique-syed-site \
  --source . \
  --project rafiquesyed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 3000
```

Then verify the deployment:

```bash
gcloud run services describe rafique-syed-site \
  --project rafiquesyed \
  --region asia-southeast1 \
  --format="table(status.latestReadyRevisionName,status.url)"

curl -sS -o /dev/null -w "Homepage: %{http_code}\n" https://rafiquesyed.in/
curl -sS -o /dev/null -w "Article: %{http_code}\n" https://rafiquesyed.in/writing/ARTICLE-SLUG
```

Both checks should normally return `200`.

## Before the first deployment from a computer

Install Node.js 22 or later and the Google Cloud CLI. Then authenticate and select the project:

```bash
gcloud auth login
gcloud config set project rafiquesyed
gcloud auth list
gcloud config get-value project
```

The active account must be allowed to deploy Cloud Run services and use the Google Cloud build service.

## Standard article release procedure

### 1. Confirm the article is connected to the site

For a new article, check all three locations:

- Article page: `app/writing/<article-slug>/page.tsx`
- Writing index: `app/writing/page.tsx`
- Homepage field note, when featured: `app/page.tsx`

Use a lowercase, hyphenated URL slug, for example:

```text
/writing/context-window-is-a-budget
```

### 2. Review the pending changes

```bash
git status --short
git diff --check
git diff
```

Confirm that the article title, date, links, image paths and public URL are correct. Do not deploy unrelated or unfinished changes.

### 3. Build locally

For a fresh checkout or after dependency changes:

```bash
npm ci
```

For every release:

```bash
npm run build
```

Stop if the build fails. A failed local build does not affect the live website.

Optional local preview:

```bash
npm run dev
```

Open `http://localhost:3000` and inspect the homepage, writing index, article page and mobile layout. Stop the preview with `Ctrl+C`.

### 4. Record the release in Git

```bash
git add app
git commit -m "Publish <article title>"
```

If the release includes assets or other files, add those exact paths as well. Review `git status --short` before continuing.

### 5. Deploy the Docker container

```bash
gcloud run deploy rafique-syed-site \
  --source . \
  --project rafiquesyed \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --port 3000
```

This command uploads the source, builds the repository's `Dockerfile`, creates a new immutable Cloud Run revision and sends traffic to it. The existing live revision continues serving while the new revision is built.

### 6. Verify the release

Check which revision is live:

```bash
gcloud run services describe rafique-syed-site \
  --project rafiquesyed \
  --region asia-southeast1 \
  --format="yaml(status.latestCreatedRevisionName,status.latestReadyRevisionName,status.url)"
```

Check the important pages, replacing `ARTICLE-SLUG`:

```bash
curl -sS -o /dev/null -w "Homepage: %{http_code}\n" https://rafiquesyed.in/
curl -sS -o /dev/null -w "Writing: %{http_code}\n" https://rafiquesyed.in/writing
curl -sS -o /dev/null -w "Article: %{http_code}\n" https://rafiquesyed.in/writing/ARTICLE-SLUG
```

Finally, open the public site in a private browser window and check:

- Navigation and article links
- Desktop and mobile layout
- Images and fonts
- Article title, date and reading flow
- GitHub, LinkedIn and other external links

## Rollback

Rollback when the new release produces errors, broken navigation, missing content or a serious visual regression.

### 1. Find the last known-good revision

```bash
gcloud run revisions list \
  --service rafique-syed-site \
  --project rafiquesyed \
  --region asia-southeast1 \
  --format="table(metadata.name,metadata.creationTimestamp,status.conditions[0].status)"
```

### 2. Route all traffic to it

Replace `LAST_GOOD_REVISION` with the exact revision name:

```bash
gcloud run services update-traffic rafique-syed-site \
  --project rafiquesyed \
  --region asia-southeast1 \
  --to-revisions=LAST_GOOD_REVISION=100
```

Verify the homepage and affected article again. Then fix the problem locally, rebuild and deploy a corrected revision.

### 3. Return traffic management to the latest revision

After a corrected deployment is ready:

```bash
gcloud run services update-traffic rafique-syed-site \
  --project rafiquesyed \
  --region asia-southeast1 \
  --to-latest
```

## Troubleshooting

### The command is using the wrong account or project

```bash
gcloud auth list
gcloud config get-value project
gcloud config set project rafiquesyed
```

Run `gcloud auth login` if the required account is not active.

### The source build fails

Reproduce the failure locally first:

```bash
npm ci
npm run build
```

View recent Google Cloud builds:

```bash
gcloud builds list --project rafiquesyed --limit=5
```

### The Cloud Run URL works, but rafiquesyed.in does not

Inspect the existing domain mapping:

```bash
gcloud beta run domain-mappings describe \
  --domain rafiquesyed.in \
  --project rafiquesyed \
  --region asia-southeast1 \
  --flatten="status.conditions[]" \
  --format="table(status.conditions.type,status.conditions.status,status.conditions.message)"
```

`Ready`, `CertificateProvisioned` and `DomainRoutable` should all be `True`. Do not recreate the mapping or change DNS records for an ordinary content deployment.

### The old page still appears

Confirm the latest ready revision, open the page in a private browser window and do a hard refresh. If the new revision is not ready, inspect its logs:

```bash
gcloud run services logs read rafique-syed-site \
  --project rafiquesyed \
  --region asia-southeast1 \
  --limit=100
```

### The container does not start

The repository's Docker image listens on port `3000`. Keep the Cloud Run `--port 3000` option unless the Dockerfile and application start command are intentionally changed together.

## Release record

For important releases, record:

```text
Date and time:
Article or change:
Git commit:
Cloud Run revision:
Verified URLs:
Released by:
Rollback revision:
Notes:
```

## Completion checklist

- Local build passed
- Git diff reviewed
- Correct Google Cloud project selected
- Cloud Run deployment completed
- Latest created and ready revisions match
- Homepage, writing index and new article return HTTP 200
- Desktop and mobile pages checked
- External links checked
- Rollback revision identified
