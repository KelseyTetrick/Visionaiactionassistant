import { Zap, MessageSquare, ArrowRight, Bell, Pencil } from "lucide-react";

const patterns = [
  {
    icon: Zap,
    title: "Automatic, Non-Intrusive Surfacing",
    desc: "The assistant appears immediately after an action is completed — no manual launch required.",
    triggers: ['"Complete action" button clicked', "Call ends", "Meeting marked done"],
    surfaces: ["Desktop: Right-side drawer", "Mobile: Bottom sheet"],
    framing: '"Capture what just happened while it\'s fresh."',
  },
  {
    icon: Bell,
    title: "Dismissible Reminder (Snooze)",
    desc: "If the fundraiser can't engage immediately, a non-blocking reminder supports re-entry.",
    triggers: ['Banner or toast: "Want help capturing notes from your meeting with Alex Morgan?"'],
    surfaces: ["Capture now", "Snooze (remind later)", "Dismiss (don't ask again)"],
    framing: "Supports fragmented, interruption-heavy workflows without forcing completion.",
  },
  {
    icon: MessageSquare,
    title: "Phase 1: Quick Capture",
    desc: "Narrative-first input that accepts messy, conversational notes before imposing structure.",
    triggers: ["Short conversational prompts", "Large, forgiving text area", "Optional chips for structure (Outcome, Next step, Sentiment)"],
    surfaces: ["No visible form fields", "Encourages speed over completeness"],
    framing: "Operationalizes 'meaning before structure' — a core insight from storytelling research.",
  },
  {
    icon: ArrowRight,
    title: "Phase 2: Review & Apply",
    desc: "Structured cards generated from the narrative, each mapping to a system object.",
    triggers: ["Contact report", "Actions / next steps", "Opportunity update", "Constituent info changes", "Follow-up message drafts"],
    surfaces: ['"Suggested" label on each', "Inline edit capability", "Explicit Apply / Don't apply per card"],
    framing: "The most important structural pattern — progressive disclosure from capture to review.",
  },
  {
    icon: Pencil,
    title: "Edit In Place",
    desc: "All editing happens inline within suggestion cards — no separate edit screens.",
    triggers: ["Edit contact report text directly in the card", "Adjust dates or owners inline", "Modify email copy inline before saving"],
    surfaces: ["Reduces friction", "Preserves flow context"],
    framing: "Switching modes increases friction and undermines low-effort follow-through.",
  },
];

export default function PatternsAndBehaviors() {
  return (
    <div className="max-w-[900px]">
      <h1>Patterns & Behaviors</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Core interaction patterns that define how the assistant surfaces, captures, and applies information.
      </p>

      <div className="space-y-4">
        {patterns.map((p) => (
          <div key={p.title} className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
            <div className="flex items-center gap-3 mb-2">
              <p.icon size={18} className="text-[var(--primary)]" />
              <h3>{p.title}</h3>
            </div>
            <p className="text-[var(--muted-foreground)] mb-4" style={{ fontSize: "var(--text-base)" }}>{p.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[var(--muted-foreground)] mb-1 block" style={{ fontWeight: "var(--font-weight-semibold)" }}>Details</label>
                <ul className="space-y-1">
                  {p.triggers.map((t) => (
                    <li key={t} className="flex items-start gap-2" style={{ fontSize: "var(--text-sm)" }}>
                      <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--chart-1)] shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label className="text-[var(--muted-foreground)] mb-1 block" style={{ fontWeight: "var(--font-weight-semibold)" }}>Characteristics</label>
                <ul className="space-y-1">
                  {p.surfaces.map((s) => (
                    <li key={s} className="flex items-start gap-2" style={{ fontSize: "var(--text-sm)" }}>
                      <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--chart-3)] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 px-3 py-2 bg-[var(--muted)] rounded-[var(--radius)]">
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] italic">{p.framing}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
