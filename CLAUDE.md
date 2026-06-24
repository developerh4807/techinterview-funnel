# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
npm run start    # serve production build
```

No test suite exists yet.

## Local setup

```bash
npm install
cp .env.local.example .env.local   # then fill in real tokens
bash scripts/setup-docs-link.sh    # symlinks ./docs/ → ~/secondbrain/…
```

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_MIXPANEL_TOKEN` | Mixpanel project token (client-side) |
| `SENDER_API_KEY` | Sender API key (only needed if using API integration) |

## Architecture

**Stack:** Next.js 16 App Router · React 19 · Tailwind CSS v4 · TypeScript · Mixpanel

**Funnel:**
```
SNS → / (PDF squeeze page) → /thank-you → Sender email sequence → Inflearn VOD
                                         └ Day 5 email: /webinar/watch?ref=email_seq

SNS webinar campaign → /webinar (registration form) → /webinar/watch
```

**Pages** (`src/app/`):
- `/` — PDF lead magnet squeeze page with testimonials, FAQs, and dual CTAs
- `/thank-you` — confirmation + soft-sell toward Inflearn VOD
- `/webinar` — Phase B webinar registration (cold SNS traffic)
- `/webinar/watch` — webinar viewing page (warm email leads via `?ref=email_seq`)

**Key components** (`src/components/`):
- `MixpanelProvider` — initializes Mixpanel once at app root (wraps all pages in `layout.tsx`)
- `PageTracker` — fires a named Mixpanel event on mount; also reads `?ref=` query param and sets `acquisition_path` as a one-time user property
- `SenderForm` — **placeholder only**; currently redirects to `/thank-you` on submit; see TODO comments inside for Sender JS embed (option A) or API route (option B) integration steps

**Analytics** (`src/lib/mixpanel.ts`): thin wrappers `track()` and `setOnce()` that swallow errors when Mixpanel isn't initialized (e.g. missing token in dev).

## Pending integrations (TODOs in code)

- **Sender form** — `src/components/SenderForm.tsx`: replace placeholder form with Sender embed or `/api/subscribe` route
- **PDF cover image** — `src/app/page.tsx`: replace dashed placeholder div with real image
- **Inflearn VOD URL** — `thank-you/page.tsx` and `webinar/watch/page.tsx`: set `INFLEARN_URL` constant
- **Webinar video URL** — `webinar/watch/page.tsx`: set `VIDEO_EMBED_URL` constant
- **Phase B content** — `webinar/page.tsx`: replace placeholder copy with actual webinar details
