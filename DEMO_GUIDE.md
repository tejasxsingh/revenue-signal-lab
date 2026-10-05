# Tejas's Revenue Signal Lab demo guide

## What you built, in plain language

Revenue teams often have pieces of an account's story in different places: a contract in CRM, usage in product analytics, support issues in a ticket system and a renewal date on someone's calendar. This demo combines those pieces into one decision: **who needs attention, why, who owns it and what should happen next?**

Your positioning is: “I care about making the revenue process work. My technical skills help me turn scattered signals into a consistent, explainable workflow.”

## A four-minute walkthrough

### 0:00 — Frame it honestly

“I built a small revenue operations workspace using synthetic accounts and public identity-verification context. It explores how CRM, product activity and customer-health signals could help a revenue team prioritize its week. The thresholds are my assumptions, not Trulioo's internal logic.”

### 0:30 — Start with the business picture

Open **Overview**. Explain the $8.63m portfolio, $2.68m renewing in 90 days, $1.81m requiring retention attention and $379k weighted pipeline. These are four different lenses. Do not add them together: the same account can be present in several metrics.

“Retention attention is the amount of ARR associated with accounts we should review. It does not mean we expect to lose that revenue.”

### 1:00 — Show a retention case

Open **Meridian Marketplace** from Accounts. It has usage down 24%, success rate down from 96% to 88%, 12 open tickets and a renewal in 38 days. The next step is a CSM-led health review with support. Its score is 100: 40 base +25 friction +20 decline +15 near renewal.

“The tool does not assume why usage fell. It gives the team a reason to investigate and a named owner.”

### 1:45 — Show credible expansion

Search **Northstar Payments**. Volume is up 34%; three markets are new; it uses one of four eligible product families; customer-health checks do not flag friction. The AE should validate the need and product fit. Priority is 82: 40 +17 growth +15 markets +10 account value.

“This is an invitation to qualify an opportunity, not proof they will buy. The CRM pipeline is kept separate from early signals.”

Generate its account brief. Show how every statement can be checked against the surrounding fields.

“The brief is currently a template-based preview, not a live language model. I constrained the inputs first so a future AI layer has a clear evidence contract. AI should reduce preparation time without deciding the commercial strategy.”

### 2:30 — Demonstrate judgment with a bad-data case

Open **Atlas Remit**. It has 28% apparent growth and new markets, but the usage feed is 12 days old. RevOps gets a data-quality task before Sales gets an expansion recommendation.

“An attractive signal is not useful if the inputs aren't trustworthy.”

### 3:00 — Close the loop

Open Action queue, search Northstar, change its owner and set progress to In progress. Open the account, save a note and close it. Explain that these changes persist only in this browser for the demo.

“The output of the analysis is owned work. In a real rollout, we'd connect this to the existing CRM and agree on how to track accepted recommendations and outcomes.”

### 3:45 — Invite useful feedback

“The question I would love your perspective on is: which signals would make an account recommendation trustworthy enough for your team to act on, and where would that action best fit in the current workflow?”

## Questions you should be ready to answer

**Why these thresholds?**
They are explicit starting assumptions chosen to create understandable scenarios. A team would review historical cases, tune by segment, assess false positives and revisit thresholds over time. There is no claim of calibration.

**Why not train an ML model?**
There are no real historical labels or outcomes. A model trained on invented outcomes would mostly reproduce the assumptions used to invent them. Rules are defensible now; ML becomes useful when there is reliable history and a measurable task.

**What does ARR mean?**
Annual recurring contract value. We use synthetic fixed annual amounts; real usage-based contracts could need committed minimums, actual consumption and overage rules modeled separately.

**What is weighted pipeline?**
An opportunity amount multiplied by a stage weight. A $100,000 Proposal at 60% contributes $60,000. Our weights are illustrative, not probabilities learned from actual wins and losses.

**Why does a renewal trigger retention without bad health?**
Because a near-term renewal needs commercial coordination even when a customer is healthy. The label is a workflow category, not a diagnosis of churn.

**What if the data is stale but the customer is actually at risk?**
This demo routes to RevOps first to verify the evidence. A production design could retain secondary risk flags and escalate urgent cases while validation occurs. The one-primary-motion approach keeps the demo legible but is a tradeoff to discuss.

**Is this the way Trulioo does RevOps?**
No. It is an independent proposal based on public product context and general RevOps principles. It does not claim to replace an internal system or solve a verified internal gap.

**Does the AI brief actually use AI?**
No live model is connected in this release. It is a deterministic summary of displayed evidence and explicitly says so. The useful architectural decision is the boundary: the summary explains structured facts; it does not invent facts or assign the priority. A live model would need a server-side provider, strict outputs and validation.

**What happens when I mark a task Done?**
The task is marked complete locally, but the source signal remains. We do not pretend a clicked button fixed a customer's behavior or changed their revenue. A real workflow would define closure reasons and re-trigger rules when fresh evidence arrives.

**How would you measure success?**
First measure adoption: how many recommendations are accepted and how quickly an owner acts. Then track quality: false positives, qualified expansion opportunities and renewal outcomes. Establish a baseline or comparison group before claiming the tool increased revenue.

**What is needed before using this with real customers?**
Source integrations, agreed metric definitions, access controls, a shared database, auditability, approved operational rules, and a pilot with Sales/CS. The demo proves the interaction and reasoning pattern, not production enterprise readiness.

## Technical terms, translated

- **Static web app:** code downloaded to the browser; no always-running application server is needed for this demo.
- **Business-rule engine:** a consistent set of if/then decisions applied to all accounts.
- **Single source of truth:** every view uses the same underlying functions, so the numbers do not drift between screens.
- **Local storage:** a small browser save area; each visitor has their own copy of notes and progress.
- **Automated test:** a repeatable check that known inputs produce the intended result, including edge cases.
- **Deployment:** putting the app files on an HTTPS host so someone can open a link.

Before presenting, use Reset demo in Action queue to clear your own test edits, then return to Overview. Keep the walkthrough focused on decisions and ownership; only explain the technology if asked.
