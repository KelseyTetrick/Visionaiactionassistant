import { Shield, Eye, Pencil, Save, UserCheck } from "lucide-react";

const principles = [
  {
    icon: UserCheck,
    title: "Human-Controlled",
    desc: "The assistant proposes, the fundraiser confirms. No autonomous actions, no automatic saving, no decisions made by the assistant.",
    details: [
      '"Suggested update" badge on every proposal',
      "Preview of what will change before applying",
      "Explicit Apply button per suggestion",
    ],
  },
  {
    icon: Eye,
    title: "Transparency & Trust",
    desc: 'Clear, repeated signals about what is and isn\'t saved. Microcopy: "Nothing is saved until you click Apply."',
    details: [
      'Footer summary: "3 updates will be saved"',
      "Confirmation screen after save",
      "Consistent with Development Agent review/cancel model",
    ],
  },
  {
    icon: Pencil,
    title: "Meaning Before Structure",
    desc: "Start with narrative-first capture (conversational questions), then translate into structured, reviewable updates.",
    details: [
      "Accepts narrative, messy input first",
      "Encourages speed over completeness",
      "No visible form fields in Phase 1",
    ],
  },
  {
    icon: Save,
    title: "Explicit Save Semantics",
    desc: "Nothing persists without deliberate user action. Draft resilience supports interruptions without accidental saves.",
    details: [
      "Save draft locally for interruptions",
      "No background changes or silent updates",
      "One-click apply per field, no bulk auto-save",
    ],
  },
  {
    icon: Shield,
    title: "Post-Action Only",
    desc: 'Explicitly labeled "Post-action follow-through," not planning. Distinct from pre-action tools like the Cultivation Assistant.',
    details: [
      "No global launch button",
      "No chatbot landing screen",
      "Tied to specific action + constituent",
    ],
  },
];

export default function DesignPrinciples() {
  return (
    <div className="max-w-[900px]">
      <h1>Design Principles</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Core trust and interaction rules that govern every aspect of the Actions Assistant.
      </p>

      <div className="space-y-4">
        {principles.map((p) => (
          <div key={p.title} className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-[var(--radius)] bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center">
                <p.icon size={16} />
              </div>
              <h3>{p.title}</h3>
            </div>
            <p className="text-[var(--muted-foreground)] mb-3" style={{ fontSize: "var(--text-base)" }}>{p.desc}</p>
            <ul className="space-y-1">
              {p.details.map((d) => (
                <li key={d} className="flex items-start gap-2" style={{ fontSize: "var(--text-sm)" }}>
                  <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--primary)] shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
