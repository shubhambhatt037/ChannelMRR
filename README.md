# ChannelMRR

The marketing channels behind verified startup revenue.

ChannelMRR ingests the [TrustMRR](https://trustmrr.com) API and exposes a single, filterable view: **for any slice of startups (by revenue, market, audience, country, founder), which marketing channels are most common?**

## Stack

- **Next.js 15** (App Router) on Vercel
- **Neon Postgres** via Prisma
- **Upstash Redis** for API rate limiting
- **Tailwind v4** + Radix UI (shadcn primitives)

## Setup

```bash
cp .env.example .env.local
# fill in DATABASE_URL (Neon), TRUSTMRR_API_KEY, CRON_SECRET, UPSTASH_*
npm install
npm run db:push
npm run dev
```

## Seeding (one-time)

The TrustMRR API caps at **20 req/min** and marketing channels live only on the
detail endpoint, so ingesting all ~7k startups takes hours.

```bash
# 1) Sync the startup directory (fast, ~150 calls)
npm run seed                     # both list + details (full run, ~6h)
npm run seed -- --details-only   # skip list refresh, just fetch missing details
npm run seed -- --limit=200      # bound the run for testing
```

## Production sync

`vercel.json` configures two crons:

- `*/15 * * * *` → `/api/cron/sync?mode=incremental` — fetches ~15 stale detail
  records per run (safely under the 20/min limit).
- `0 6 * * *` → `/api/cron/sync?mode=list` — refreshes the startup directory
  daily to catch new listings and updated MRR.

Both require `Authorization: Bearer ${CRON_SECRET}` — Vercel cron sends this
automatically when `CRON_SECRET` is set as an env var.

## Public API

| Endpoint | Notes |
|---|---|
| `GET /api/channels/aggregate` | Returns channel frequency for the filter set. Query: `minMrr`, `maxMrr`, `category` (csv), `audience` (csv), `country` (csv), `founder`, `channelCategory`. |
| `GET /api/facets` | Distinct values for filter dropdowns + sync status. |
| `GET /api/cron/sync` | Protected by `CRON_SECRET`. |

The aggregate endpoint is rate-limited to **60 req/min per IP** via Upstash.
