import { useState } from "react";
import { Sparkles, X, Phone, Clock, User, Info, ArrowRight } from "lucide-react";

const questionChips = [
  { id: "what", label: "What happened?", active: true },
  { id: "next", label: "Any commitments or next steps?", active: false },
  { id: "update", label: "Any constituent details to update?", active: false },
];

const detailChips = ["Opportunity", "Next action", "Gift", "Sentiment", "Constituent update"];

export default function DesktopQuickCapture() {
  const [activeQuestion, setActiveQuestion] = useState("what");
  const [narrativeText, setNarrativeText] = useState(
    "Spoke with Alex about the capital campaign. She's very interested in the new science building — her daughter is a chemistry major. She mentioned she'd like to make a commitment before the end of Q2. Wants to discuss naming opportunities. Asked me to send the building plans and schedule a campus visit for April."
  );
  const [selectedChips, setSelectedChips] = useState<string[]>(["Opportunity", "Next action"]);

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) => (prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]));
  };

  return (
    <div className="max-w-[1200px]">
      <h1>Quick Capture</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Phase 1: Narrative-first capture with conversational prompts — accepts messy input, no visible forms.
      </p>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden" style={{ boxShadow: "var(--elevation-sm)", minHeight: 600 }}>
        <div className="flex h-full" style={{ minHeight: 600 }}>
          {/* Dimmed background page */}
          <div className="flex-1 p-6 border-r border-[var(--border)] bg-[var(--background)] opacity-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center" style={{ fontSize: "var(--text-xl)", fontWeight: "var(--font-weight-semibold)" }}>AM</div>
              <div>
                <h2>Alex Morgan</h2>
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Major Gift Prospect · $500K capacity</p>
              </div>
            </div>
          </div>

          {/* Quick Capture Drawer */}
          <div className="w-[420px] min-w-[420px] bg-[var(--card)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[var(--primary)]" />
                <h3>Actions Assistant</h3>
              </div>
              <button className="p-1 hover:bg-[var(--muted)] rounded-[var(--radius)]">
                <X size={16} className="text-[var(--muted-foreground)]" />
              </button>
            </div>

            {/* Compact context card */}
            <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--muted)]/50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Phone size={12} className="text-[var(--muted-foreground)]" />
                  <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Phone Call</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-[var(--muted-foreground)]" />
                  <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Today, 2:30 PM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User size={12} className="text-[var(--muted-foreground)]" />
                  <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Alex Morgan</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {/* Trust badge */}
              <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-[var(--primary)]/5 rounded-[var(--radius)]">
                <Info size={14} className="text-[var(--primary)] shrink-0" />
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">Nothing is saved until you click Apply.</p>
              </div>

              {/* Conversational question chips */}
              <label className="mb-2 block text-[var(--muted-foreground)]" style={{ fontWeight: "var(--font-weight-semibold)" }}>Quick prompts</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {questionChips.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestion(q.id)}
                    className={`px-3 py-1.5 rounded-full border transition-colors ${
                      activeQuestion === q.id
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]"
                        : "bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--primary)]"
                    }`}
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Large text area */}
              <label className="mb-2 block text-[var(--muted-foreground)]" style={{ fontWeight: "var(--font-weight-semibold)" }}>
                {activeQuestion === "what" && "Tell me what happened..."}
                {activeQuestion === "next" && "Any commitments or next steps?"}
                {activeQuestion === "update" && "Any constituent details to update?"}
              </label>
              <textarea
                value={narrativeText}
                onChange={(e) => setNarrativeText(e.target.value)}
                className="w-full h-[200px] p-3 bg-[var(--input-background)] border border-[var(--border)] rounded-[var(--radius)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-[var(--foreground)]"
                style={{ fontSize: "var(--text-base)" }}
                placeholder="Just tell me what happened in your own words..."
              />

              {/* Add detail chips */}
              <div className="mt-4">
                <label className="mb-2 block text-[var(--muted-foreground)]" style={{ fontWeight: "var(--font-weight-semibold)" }}>Add detail</label>
                <div className="flex flex-wrap gap-2">
                  {detailChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => toggleChip(chip)}
                      className={`px-3 py-1 rounded-full border transition-colors ${
                        selectedChips.includes(chip)
                          ? "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/30"
                          : "bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--primary)]"
                      }`}
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      {selectedChips.includes(chip) ? "✓ " : "+ "}
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-[var(--border)] flex items-center justify-between">
              <div className="flex gap-2">
                <button className="px-3 py-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Save draft</button>
                <button className="px-3 py-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Snooze</button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] hover:opacity-90 transition-opacity" style={{ fontSize: "var(--text-sm)" }}>
                Continue
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}