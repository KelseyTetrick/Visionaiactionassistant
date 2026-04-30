import { Monitor, Smartphone, User, Zap, Shield, Clock } from "lucide-react";

function InfoCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-4" style={{ boxShadow: "var(--elevation-sm)" }}>
      <div className="flex items-center gap-2 mb-1">
        <Icon size={14} className="text-[var(--primary)]" />
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">{label}</span>
      </div>
      <p style={{ fontSize: "var(--text-base)" }} className="text-[var(--foreground)]">{value}</p>
    </div>
  );
}

export default function Overview() {
  return (
    <div className="max-w-[900px]">
      <h1>Actions Assistant</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Post-action follow-through assistant for Raiser's Edge NXT — helping fundraisers capture what just happened and what happens next while context is fresh.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <InfoCard icon={Monitor} label="Product + Surface" value="Raiser's Edge NXT; embedded assistant UI" />
        <InfoCard icon={User} label="Primary User" value="Fundraiser" />
        <InfoCard icon={Zap} label="Trigger Event" value="After completing an interaction" />
        <InfoCard icon={Shield} label="Trust Rules" value="Human-initiated, review-required, no auto-save" />
        <InfoCard icon={Clock} label="Content Tone" value="Conversational, concise, professional" />
        <InfoCard icon={Smartphone} label="Surfaces" value="Desktop drawer + Mobile bottom sheet" />
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5 mb-6" style={{ boxShadow: "var(--elevation-sm)" }}>
        <h3 className="mb-3">Key Jobs</h3>
        <ul className="space-y-2">
          {[
            "Capture narrative notes (also saved as a note on the constituent overview)",
            "Confirm outcomes",
            "Create/update actions & opportunities",
            "Update constituent info",
            "Draft follow-up communications",
          ].map((job) => (
            <li key={job} className="flex items-start gap-2" style={{ fontSize: "var(--text-base)" }}>
              <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[var(--primary)] shrink-0" />
              {job}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5 mb-6" style={{ boxShadow: "var(--elevation-sm)" }}>
        <h3 className="mb-3">Screens</h3>
        <div className="space-y-3">
          {[
            { num: "1", title: "Post-Action Prompt", desc: "Context card showing completed action with framing message" },
            { num: "2", title: "Quick Capture", desc: "Conversational prompts with narrative text area and detail chips" },
            { num: "3", title: "Review & Apply", desc: "Structured suggestion cards with explicit apply controls" },
          ].map((s) => (
            <div key={s.num} className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center shrink-0" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }}>{s.num}</span>
              <div>
                <p style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--text-base)" }}>{s.title}</p>
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
        <h3 className="mb-3">UI Components</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Assistant header", "Context card", "Question chips", "Text area",
            "Suggestion cards w/ apply toggles", "Final save", "Loading state",
            "Partial completion", "Validation", "Discard/Snooze", "Error state"
          ].map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--foreground)]" style={{ fontSize: "var(--text-sm)" }}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}