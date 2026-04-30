import { Clock, CheckCircle, FileText, AlertTriangle } from "lucide-react";

export default function ControlAndExit() {
  return (
    <div className="max-w-[900px]">
      <h1>Control & Exit Patterns</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        How fundraisers leave without penalty — supporting real-world interruptions and fragmented workdays.
      </p>

      <div className="space-y-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="flex items-center gap-3 mb-3">
            <Clock size={18} className="text-[var(--chart-5)]" />
            <h3>Snooze / Save Draft</h3>
          </div>
          <p className="text-[var(--muted-foreground)] mb-3">Persistent option to pause. Draft is recoverable from action history or constituent timeline.</p>
          <div className="flex flex-wrap gap-2">
            {["Save draft locally", "Resume from action history", "Resume from constituent timeline", "Supports travel & hallway interruptions"].map((i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-[var(--muted)]" style={{ fontSize: "var(--text-sm)" }}>{i}</span>
            ))}
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle size={18} className="text-[var(--chart-1)]" />
            <h3>Clear Completion State</h3>
          </div>
          <p className="text-[var(--muted-foreground)] mb-3">Confirmation summary provides closure and reinforces that follow-through is complete.</p>
          <div className="bg-[var(--muted)] rounded-[var(--radius)] p-4">
            <p style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--chart-1)]">Example confirmation:</p>
            <p style={{ fontSize: "var(--text-base)" }} className="mt-1">"Contact report saved · 2 actions created · Opportunity updated"</p>
            <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] mt-1">Option to view record</p>
          </div>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="flex items-center gap-3 mb-3">
            <FileText size={18} className="text-[var(--primary)]" />
            <h3>Draft Resilience</h3>
          </div>
          <p className="text-[var(--muted-foreground)] mb-3">"Save draft locally" state to support interruptions — travel, hallway conversations, context switching.</p>
          <ul className="space-y-1">
            {[
              "Draft persists across sessions",
              "Banner reminder on next constituent visit",
              "No data loss from accidental closure",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2" style={{ fontSize: "var(--text-sm)" }}>
                <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--primary)] shrink-0" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle size={18} className="text-[var(--destructive)]" />
            <h3>Discard</h3>
          </div>
          <p className="text-[var(--muted-foreground)] mb-3">Clear discard action with confirmation to prevent accidental data loss.</p>
          <div className="bg-[var(--destructive)]/5 border border-[var(--destructive)]/20 rounded-[var(--radius)] p-3">
            <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--destructive)]">
              "Are you sure? Your notes and suggestions will be permanently discarded."
            </p>
          </div>
        </div>

        {/* Sticky footer pattern doc */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-5" style={{ boxShadow: "var(--elevation-sm)" }}>
          <h3 className="mb-3">Footer Actions Reference</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Save all changes", type: "Primary", color: "var(--primary)" },
              { label: "Save draft", type: "Secondary", color: "var(--border)" },
              { label: "Snooze", type: "Tertiary", color: "var(--muted)" },
              { label: "Discard", type: "Destructive", color: "var(--destructive)" },
            ].map((a) => (
              <div key={a.label} className="text-center p-3 rounded-[var(--radius)] border border-[var(--border)]">
                <div className="w-full py-2 rounded-[var(--radius)] mb-2" style={{ backgroundColor: a.color }}>
                  <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)", color: a.color === "var(--muted)" || a.color === "var(--border)" ? "var(--foreground)" : "var(--primary-foreground)" }}>{a.label}</span>
                </div>
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">{a.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
