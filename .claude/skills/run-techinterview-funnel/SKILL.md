---
name: run-techinterview-funnel
description: Run, build, smoke-test, or verify the techinterview-funnel Next.js app. Use when asked to run the app, start the dev server, check pages work, test a change, or confirm a UI fix is live.
---

This is a **Next.js 16 App Router** marketing funnel (React 19 · Tailwind CSS v4 · TypeScript).
Driven via `curl` smoke tests (server) or `chromium-cli` for visual verification. `chromium-cli` is not available in this container — use `curl` for headless smoke tests.

## Prerequisites

```bash
node --version   # v18+ required
npm install      # install deps (already done if node_modules exists)
cp .env.local.example .env.local  # if .env.local is missing; fill in NEXT_PUBLIC_MIXPANEL_TOKEN
```

## Dev server (agent path)

```bash
# 1. Start in background
npm run dev > /tmp/nextjs-dev.log 2>&1 &
DEV_PID=$!

# 2. Wait for ready
sleep 4 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/

# 3. Smoke-test all pages
curl -s -o /dev/null -w "/ → %{http_code}\n"              http://localhost:3000/
curl -s -o /dev/null -w "/thank-you → %{http_code}\n"     http://localhost:3000/thank-you
curl -s -o /dev/null -w "/webinar → %{http_code}\n"       http://localhost:3000/webinar
curl -s -o /dev/null -w "/webinar/watch → %{http_code}\n" http://localhost:3000/webinar/watch

# 4. Check specific content (example)
curl -s http://localhost:3000/ | grep -o '<h1[^>]*>.*</h1>'
curl -s http://localhost:3000/ | grep -o 'data-sender-form-id="[^"]*"'

# 5. Stop when done
kill $DEV_PID 2>/dev/null
# or: kill $(lsof -ti:3000) 2>/dev/null
```

All four pages returned 200. Sender form (`data-sender-form-id="aM8lOR"`) appears twice on `/` (Hero + Bottom CTA).

## Production build (agent path)

```bash
npm run build 2>&1 | tail -20
# Expect: ✓ Generating static pages (7/7)
# All routes are static (○), no server routes.
```

## Human path

```bash
npm run dev   # opens localhost:3000 in browser
npm run build && npm run start  # production preview
```

## Pages & components to know

| Route | File | Notes |
|-------|------|-------|
| `/` | `src/app/page.tsx` | Squeeze page — Sender form × 2 |
| `/thank-you` | `src/app/thank-you/page.tsx` | Post-subscribe soft-sell → Inflearn VOD |
| `/webinar` | `src/app/webinar/page.tsx` | Phase B (placeholder copy) |
| `/webinar/watch` | `src/app/webinar/watch/page.tsx` | Warm email leads |

Key components:
- `src/components/SenderForm.tsx` — Sender JS embed (`afterInteractive`)
- `src/components/MixpanelProvider.tsx` — sync render-time init (NOT useEffect)
- `src/components/PageTracker.tsx` — fires named Mixpanel event + captures `?ref=`

## Environment variables

| Var | Required for |
|-----|-------------|
| `NEXT_PUBLIC_MIXPANEL_TOKEN` | Mixpanel tracking (omit → silently disabled) |
| `SENDER_API_KEY` | Only if using API route integration (not currently used) |

## Gotchas

- **Mixpanel must NOT use `useEffect` for init.** `PageTracker` (child) `useEffect` fires before `MixpanelProvider` (parent) `useEffect` → events silently dropped. Current impl initialises at render time with a module-scope `initialized` flag.
- **`public/images/` is gitignored.** PDF cover image must live at `public/free_bait_cover.png` (root), not `public/images/`. Vercel won't deploy ignored paths.
- **Sender form delay:** `afterInteractive` loads the Sender script after hydration. Some delay is unavoidable — it's Sender's CDN round-trip, not a code bug.
- **Port 3000 may already be in use.** Kill with `kill $(lsof -ti:3000)` before starting.
- **`chromium-cli` not available** in this container. Use `curl` for smoke tests. For visual verification, check the Vercel preview URL instead.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `EADDRINUSE: address already in use :::3000` | `kill $(lsof -ti:3000)` |
| Mixpanel events not captured | Check `NEXT_PUBLIC_MIXPANEL_TOKEN` in `.env.local`; confirm no ad-blocker |
| PDF image missing on Vercel | Ensure `public/free_bait_cover.png` is committed (not inside `public/images/`) |
| Sender form not rendering | Check browser console — `lazyOnload` was swapped to `afterInteractive`; if reverted, form will be slow |
| Build fails on TypeScript | Run `npm run lint` first to surface type errors |
