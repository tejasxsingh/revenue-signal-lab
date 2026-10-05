# Revenue Signal Lab

A deployable, dependency-free RevOps portfolio by Tejas Singh. Start with the operating decision: **which accounts deserve attention, why, and who should act next?**

This is an independent synthetic-data demonstration, not a Trulioo system. Product context comes from public sources. All accounts, owners, contracts, opportunities, eligibility mappings, thresholds and outcomes are fictional. No private Trulioo data or business rules are included.

## Run locally

Requires Node.js 20 or later. No package installation, API key or build step is needed.

```sh
npm start
```

Open http://127.0.0.1:4173. Stop with Ctrl+C. Serve over HTTP; opening index.html directly as a file will not load ES modules reliably.

```sh
npm test
```

The app uses native JavaScript modules, semantic HTML, CSS and the browser's dialog and localStorage APIs. It works on a static HTTPS host. Google Fonts are optional; system fonts are used if the network request fails. No analytics or tracking code is included.

## Deploy

The publish directory is `dist/`. It contains the complete browser application; there is no server build. Upload **the contents of dist/** to any static HTTPS host. Hash navigation means no server rewrite rules are required. Do not publish the local development server as an internet-facing production server.

For Cloudflare Pages, create a direct-upload project and upload `dist/`. For Netlify, drag `dist/` into its manual deploy interface. For a Git-based host, leave the build command blank and select `dist` as the publish directory. No environment variables are required.

The `.openai/hosting.json` manifest identifies the Sites deployment created for this portfolio. It is not a credential. To deploy a separate copy through Sites, remove its `project_id` and register your own project; do not overwrite this project's hosted source by accident.

## Product surfaces

- **Overview:** portfolio ARR, near-term renewal exposure, retention attention, weighted pipeline, activity trend and ranked priorities.
- **Action queue:** next actions, default owners, reassignment, progress and local workflow notes.
- **Accounts:** segment summaries, intersecting filters, search, drilldowns and structured evidence briefs.
- **Renewals:** the next 90 days with contract value, commercial status, routing and CSM.
- **Pipeline:** existing CRM opportunities by stage, showing weighted and unweighted values.
- **Data quality:** stale-source and missing-owner exceptions that suppress commercial recommendations.
- **Method & sources:** formulas, precedence, source links, assumptions and limitations inside the product.

## Architecture

`dist/model.js` is the single source of truth for the fixed synthetic dataset, business rules, filters, aggregate metrics and account briefs. `dist/app.js` renders the seven views, manages local workflow state, exports CSV and exposes one optional WebMCP account-navigation tool. `dist/styles.css` defines the responsive visual system. `server.mjs` is a small local-only HTTP server. `tests/model.test.js` contains regression tests using Node's built-in test runner.

### State and privacy

The snapshot date is fixed at **2026-09-22**, so the demo does not silently age or change between presentations. Every financial amount is USD. Filters last for a session; owner overrides, progress and notes are stored only under the browser storage key `revenue-signal-lab-v1`. The Reset demo action clears those local edits. Each visitor has independent state; this is not a shared team database. A local edit log is not a production audit trail. Do not enter customer data or confidential notes into the public demo.

### The AI boundary

The working account brief is **deterministic and template-based**. It is labeled “Template-based demo · no live language model” in the UI. It summarizes only fields displayed in the account detail and gives an evidence-section list. It is not an LLM integration, learned churn model, or validated buying-propensity score. No API key is needed, no provider is called, and the app cannot hallucinate an external customer story.

This is a deliberate demo tradeoff, not a claim that templates constitute machine learning. To use an actual language model later, add a server-side endpoint with a secret provider key, send only approved structured fields, require evidence IDs in a strict output schema, validate numeric claims, return this deterministic summary on failure, rate-limit requests and preserve human approval before outreach. Never put an API secret in static browser code.

### Why rules before machine learning?

There are no real labeled historical outcomes here. Training on synthetic outcomes would mainly learn our generator's assumptions. Transparent rules are easier to explain, change and test. A production pilot should measure accepted recommendations, time to first action, qualified expansion conversion, renewal outcomes and false-positive rates; it should not claim uplift without a comparison design.

## Rule specification

One primary motion is assigned in this order:

1. Data quality: usage age >7 days; CRM age >14 days; missing CRM owner; or nonpositive prior volume. Priority 75, owner RevOps, target 2 business days.
2. Retention: success rate drops at least 5 percentage points or open tickets >=10 (friction); volume falls at least 15%; or renewal <=45 days. Score = 40 +25 for friction +20 for decline +15 for near renewal, capped at 100. CSM owns the review. Target 2 business days for friction and 5 otherwise.
3. Expansion: growth >=20%, at least one new market, eligible unadopted products, and no earlier gate. Score = min(90, 40 + round(growth_fraction ×50) + new_markets ×5 + (ARR >=300000 ? 10 : 0)). AE owns qualification, target 5 business days.
4. Monitor: priority 20; CSM reviews at the normal monthly cadence.

High >=80; medium 50–79; low <50. Rank by score, then ARR, both descending. Scores are prioritization points, never probabilities. Task status records completion of an action; it does not resolve underlying signals or change portfolio financials.

## Metric dictionary

| Metric | Definition | Caveat |
|---|---|---|
| Contract ARR | Sum of annualized contracted recurring value | Not revenue recognized, billing or a usage forecast |
| Renewing in 90 days | ARR where renewal days <=90 | Inclusive horizon from the fixed snapshot |
| Retention attention | ARR of accounts whose primary motion is Retention | Not expected loss or proven churn risk |
| Weighted pipeline | Sum of opportunity value × illustrative stage weight | Not an ML forecast or guaranteed bookings |
| Usage change | (Current 90-day volume − prior 90-day volume) / prior volume | Invalid baseline becomes a quality exception |
| Success-rate change | Current percent − prior percent | Percentage points, not percent change |
| Chart volume | Six 30-day buckets; first/last three reconcile to prior/current windows | Month labels approximate; includes flagged stale feeds |
| Product whitespace | Eligible product families not adopted | Eligibility is invented and requires human validation |

Pipeline weights: Discovery 20%, Qualification 35%, Proposal 60%, Negotiation 80%, None 0%. Candidate expansion signals are never automatically converted into opportunities. Existing opportunities remain visible even if a health or data-quality gate prevents a recommendation.

## Verified baseline totals

24 accounts; $8,628,000 ARR; $2,676,000 renewing within 90 days; $1,812,000 ARR routed to retention; $379,200 weighted pipeline; 4 expansion accounts; 4 accounts with data-quality exceptions. The action queue has 16 accounts. See TESTING.md for exact verification coverage and limitations.

## Public context

Checked 22 September 2026:

- https://www.trulioo.com/solutions — integrated individual verification, business verification and fraud intelligence.
- https://www.trulioo.com/industries/marketplaces-identity-verification — verification and onboarding-friction context.
- https://www.trulioo.com/identity-verification-use-cases/global-expansion — market expansion and verification context.

These sources motivate the domain. They do not validate our scoring, data model, product eligibility or commercial assumptions. No Trulioo logo or endorsement is used.

## Production adoption would require

Authentication and authorization; durable shared storage; versioned source ingestion with account-ID joins; data validation and lineage; approved metric contracts; configurable rules; operational monitoring; genuine audit controls; and reviewed CRM integrations. The current release is production-style in presentation and deployment, with intentionally bounded portfolio-demo infrastructure.


## GitHub Pages

Publish `dist` with the included `.github/workflows/pages.yml`. In repository Settings → Pages select GitHub Actions. Every push to `main` runs tests and deploys the static app. No API key or backend is required. All CRM data is synthetic and workflow changes stay in the visitor’s browser.
