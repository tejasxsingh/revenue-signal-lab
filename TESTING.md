# Verification record — 22 September 2026

## Automated checks

Run `npm test` (Node 20+; no installation required). All **17 tests pass**.

Coverage: unique/coherent records; usage denominator and zero baseline; freshness boundaries; missing-owner exceptions; rule precedence; percentage-point friction; decline and renewal cutoffs; expansion prerequisites; score caps; exact financial totals; empty portfolios; filters and ranking; brief grounding; chart reconciliation; CSV escaping, synthetic labels, local overrides and formula-prefix neutralization. JavaScript syntax check passed. The local server returned HTTP 200.

## Browser flows exercised

Verified in the Codex in-app browser:

- All seven views render, including four reconciled overview metrics.
- Account search, motion filters, empty state and Clear; 24 total accounts and 4 expansion accounts.
- Filtered result count updates correctly.
- Renewal table: 12 accounts; pipeline: 20 opportunities; quality view: 4 accounts.
- Drilldowns show commercial, adoption, usage and health evidence.
- Northstar brief matches structured inputs; Atlas brief blocks expansion on stale data.
- Notes, assignments and progress persist after reload.
- Reassigning an account updates owner-filter results.
- Local activity updates after saving; Start action updates queue progress.
- Export preview contains filtered rows, local owner and progress, synthetic labels and the expected download filename.
- Reset confirmation restores default owners, notes and To do status.
- Desktop and phone layouts checked; overview and account dialog have no document-level horizontal overflow at the tested narrow width. Tables scroll within their containers.
- Final browser session reported no console errors.
- Optional WebMCP account tool registered correctly; valid A003 opened Atlas; an invalid ID was rejected without corrupting state.

## Verification limits

Not a full cross-browser certification or accessibility audit. The browser's automated download event timed out for an earlier export implementation. The final export review and download link were verified for CSV contents and filename; an OS-level saved download was not independently inspected. A copyable CSV preview is available if an embedded browser blocks downloads.

No live model, CRM connector, shared backend, identity system or real ingestion pipeline is connected. No predictive accuracy, causal uplift or production enterprise-readiness claim is made.
