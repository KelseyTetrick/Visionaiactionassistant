# Figma Make Guidelines
## Actions Assistant — Raiser’s Edge NXT

These guidelines define how to prompt Figma Make to generate UI concepts for the **Actions Assistant**, a post‑interaction, human‑controlled assistant that helps fundraisers capture outcomes and follow‑through immediately after real interactions.

---

## 1. Product Intent (Required Context)

**What this is**
- An internal, fundraiser‑facing assistant in Raiser’s Edge NXT
- Supports **post‑interaction follow‑through**
- Helps capture narrative context, confirm outcomes, and persist updates to the system

**What this is not**
- Not autonomous
- Not donor‑facing
- Not a planning or pre‑action tool
- Not a full‑page chatbot experience

The assistant exists to **reduce friction, not replace judgment**. Nothing is saved without explicit human review and action. [2](https://blackbaud.sharepoint.com/sites/PreSales-Products/SitePages/Raiser's%20Edge.aspx?web=1)[1](https://blackbaud.sharepoint.com/sites/UXteam/SitePages/What-success-looks-like-for-agents-Early-insights-from-Development-Agent-customers.aspx?web=1)

---

## 2. Invocation Pattern (Must Be Explicit)

**Trigger**
- Appears immediately after a fundraiser:
  - Completes an action
  - Ends a call
  - Marks a meeting as done

**Do**
- Tie the assistant to a specific action + constituent
- Surface it contextually

**Do Not**
- Require the user to “go find” the assistant
- Present it as a generic AI entry point

This assistant supports the fragile moment between interaction and record creation. [2](https://blackbaud.sharepoint.com/sites/PreSales-Products/SitePages/Raiser's%20Edge.aspx?web=1)

---

## 3. Surface & Layout Patterns

### Desktop
- Right‑side drawer anchored to:
  - Constituent record, or
  - Action completion state

### Mobile
- Bottom sheet launched after “Complete action”

**Avoid**
- Full‑page takeovers
- Standalone chat pages

The UI should feel **lightweight, interruptible, and resumable**. [1](https://blackbaud.sharepoint.com/sites/UXteam/SitePages/What-success-looks-like-for-agents-Early-insights-from-Development-Agent-customers.aspx?web=1)

---

## 4. Core Interaction Model (Critical)

### Two‑Phase Flow (Required)

#### Phase 1: Quick Capture (Narrative First)
- Short conversational prompts (2–4)
- Large, forgiving text input
- Optional chips for lightweight structure (e.g., Outcome, Next step)

Purpose:
- Capture meaning while memory is fresh
- Optimize for speed, not completeness

#### Phase 2: Review & Apply (Structure Second)
- Convert narrative input into structured suggestions
- Present changes as **reviewable cards**
- Require explicit confirmation for every update

This preserves meaning before forcing structure. [2](https://blackbaud.sharepoint.com/sites/PreSales-Products/SitePages/Raiser's%20Edge.aspx?web=1)[1](https://blackbaud.sharepoint.com/sites/UXteam/SitePages/What-success-looks-like-for-agents-Early-insights-from-Development-Agent-customers.aspx?web=1)

---

## 5. Content & Output Modules

Figma Make should generate **separate, collapsible cards** for each output type.

### Required Cards
- **Contact Report Draft**
  - Narrative summary
  - Inline editable
- **Outcomes & Next Steps**
  - Suggested actions with dates/owners
- **Opportunity Updates**
  - Create, update, or link (review required)
- **Constituent Data Updates**
  - Highlighted before → after changes
- **Follow‑Up Drafts**
  - Thank‑you or recap message
  - Copy / Save draft actions

Each card must include:
- “Suggested” labeling
- Inline edit
- Explicit Apply / Don’t apply controls [2](https://blackbaud.sharepoint.com/sites/PreSales-Products/SitePages/Raiser's%20Edge.aspx?web=1)[1](https://blackbaud.sharepoint.com/sites/UXteam/SitePages/What-success-looks-like-for-agents-Early-insights-from-Development-Agent-customers.aspx?web=1)

---

## 6. Trust & Control Requirements (Non‑Negotiable)

**Must Include**
- Clear microcopy: “Nothing is saved until you click Apply”
- Explicit Apply actions per card
- Final Save confirmation summarizing changes

**Must Not Include**
- Automatic persistence
- Background updates
- Silent system changes

This maintains a clear boundary from autonomous agents (e.g., Development Agent). [5](https://blackbaud.sharepoint.com/sites/SuccessServices/Shared%20Documents/Power%20Platform%20Documentation%20-%20PDFs/Blackbaud%20Raisers%20Edge%20NXT%20Interactions%20-%20Connectors%20_%20Microsoft%20Learn.pdf?web=1)[2](https://blackbaud.sharepoint.com/sites/PreSales-Products/SitePages/Raiser's%20Edge.aspx?web=1)

---

## 7. Exit & Interruption Patterns

**Required Options**
- Save draft
- Snooze
