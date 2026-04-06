import { useState } from "react";
import { Sparkles, X, ArrowRight, Info } from "lucide-react";

const prompts = ["What happened?", "Next steps?", "Updates?"];
const chips = ["Opportunity", "Next action", "Gift", "Sentiment", "Constituent update"];

export default function MobileQuickCapture() {
  const [activePrompt, setActivePrompt] = useState(0);
  const [text, setText] = useState("Alex is very interested in the science building. Wants to commit by Q2. Asked for building plans and a campus visit in April.");
  const [selected, setSelected] = useState<string[]>(["Opportunity", "Next action"]);

  return (
    <div className="max-w-[900px]">
      <h1>Mobile: Quick Capture</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Full-screen quick capture with conversational prompts, narrative text area, and quick-pick chips.
      </p>

      <div className="mx-auto" style={{ maxWidth: 390 }}>
        <div className="bg-[var(--foreground)] rounded-[24px] p-2 overflow-hidden" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="bg-[var(--card)] rounded-[18px] overflow-hidden flex flex-col" style={{ height: 750 }}>
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 py-2">
              <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }}>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-[var(--foreground)] rounded-sm" />
                <div className="w-4 h-2 bg-[var(--foreground)] rounded-sm" />
                <div className="w-6 h-3 border border-[var(--foreground)] rounded-sm"><div className="w-4 h-2 bg-[var(--chart-1)] rounded-sm m-[1px]" /></div>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[var(--primary)]" />
                <p style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--text-base)" }}>Quick Capture</p>
              </div>
              <button className="p-1"><X size={16} className="text-[var(--muted-foreground)]" /></button>
            </div>

            {/* Trust badge */}
            <div className="mx-4 mt-3 flex items-center gap-2 px-3 py-2 bg-[var(--primary)]/5 rounded-[var(--radius)]">
              <Info size={12} className="text-[var(--primary)] shrink-0" />
              <p style={{ fontSize: "11px" }} className="text-[var(--primary)]">Nothing saved until you tap Apply.</p>
            </div>

            {/* Context line */}
            <div className="px-4 py-2">
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Phone Call · Alex Morgan · Today 2:30 PM</p>
            </div>

            {/* Question chips */}
            <div className="px-4 pb-2">
              <div className="flex gap-2 overflow-x-auto">
                {prompts.map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setActivePrompt(i)}
                    className={`px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors ${
                      activePrompt === i
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]"
                        : "bg-[var(--card)] border-[var(--border)]"
                    }`}
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Text area */}
            <div className="flex-1 px-4 pb-2">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-full p-3 bg-[var(--input-background)] border border-[var(--border)] rounded-[var(--radius)] resize-none focus:outline-none focus:ring-2 focus:ring-[var(--ring)] text-[var(--foreground)]"
                style={{ fontSize: "var(--text-base)", minHeight: 200 }}
                placeholder="Tell me what happened..."
              />
            </div>

            {/* Quick-pick chips */}
            <div className="px-4 pb-3">
              <label className="block mb-1.5 text-[var(--muted-foreground)]" style={{ fontWeight: "var(--font-weight-semibold)" }}>Add detail</label>
              <div className="flex flex-wrap gap-2">
                {chips.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelected((p) => p.includes(c) ? p.filter((x) => x !== c) : [...p, c])}
                    className={`px-3 py-1 rounded-full border transition-colors ${
                      selected.includes(c)
                        ? "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/30"
                        : "border-[var(--border)] text-[var(--muted-foreground)]"
                    }`}
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    {selected.includes(c) ? "✓ " : "+ "}{c}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-[var(--border)] flex items-center gap-2">
              <button className="px-3 py-2 text-[var(--muted-foreground)] bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Save draft</button>
              <div className="flex-1" />
              <button className="flex items-center gap-2 px-5 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)" }}>
                Continue <ArrowRight size={14} />
              </button>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-32 h-1 bg-[var(--muted)] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}