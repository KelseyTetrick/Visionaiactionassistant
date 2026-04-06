import { useState } from "react";
import {
  Sparkles, X, FileText, Target, TrendingUp, UserCog, Mail,
  Check, Pencil, Copy, ChevronDown, ChevronUp, Info, CheckCircle, StickyNote,
} from "lucide-react";

interface SuggestionCard {
  id: string;
  icon: React.ElementType;
  title: string;
  applied: boolean;
  expanded: boolean;
}

export default function DesktopReviewApply() {
  const [cards, setCards] = useState<SuggestionCard[]>([
    { id: "report", icon: FileText, title: "Contact Report Draft", applied: false, expanded: true },
    { id: "actions", icon: Target, title: "Outcomes & Next Steps", applied: false, expanded: true },
    { id: "opp", icon: TrendingUp, title: "Opportunity Update", applied: false, expanded: true },
    { id: "constituent", icon: UserCog, title: "Constituent Info Updates", applied: false, expanded: false },
    { id: "followup", icon: Mail, title: "Follow-Up Message Draft", applied: false, expanded: false },
  ]);
  const [saved, setSaved] = useState(false);

  const [reportText, setReportText] = useState(
    "Spoke with Alex Morgan regarding the capital campaign. She expressed strong interest in the new science building — her daughter is a chemistry major. Alex mentioned she'd like to make a commitment before end of Q2 and is interested in naming opportunities. Requested building plans and a campus visit in April."
  );

  const [saveAsNote, setSaveAsNote] = useState(true);

  const toggleExpand = (id: string) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, expanded: !c.expanded } : c)));
  };

  const toggleApply = (id: string) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, applied: !c.applied } : c)));
  };

  const appliedCount = cards.filter((c) => c.applied).length;

  if (saved) {
    return (
      <div className="max-w-[1200px]">
        <h1>Review & Apply</h1>
        <p className="text-[var(--muted-foreground)] mt-1 mb-6">Confirmation state after save.</p>
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden" style={{ boxShadow: "var(--elevation-sm)", minHeight: 600 }}>
          <div className="flex h-full" style={{ minHeight: 600 }}>
            <div className="flex-1 p-6 bg-[var(--background)] opacity-50" />
            <div className="w-[420px] min-w-[420px] bg-[var(--card)] flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 rounded-full bg-[var(--chart-1)]/10 flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-[var(--chart-1)]" />
              </div>
              <h2 className="mb-2">Changes Saved</h2>
              <div className="space-y-2 text-center mb-6">
                <p style={{ fontSize: "var(--text-sm)" }}>Contact report saved</p>
                <p style={{ fontSize: "var(--text-sm)" }}>Note added to constituent overview</p>
                <p style={{ fontSize: "var(--text-sm)" }}>2 actions created</p>
                <p style={{ fontSize: "var(--text-sm)" }}>Opportunity updated</p>
              </div>
              <button onClick={() => setSaved(false)} className="px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)" }}>View Record</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px]">
      <h1>Review & Apply</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Phase 2: Structured suggestion cards with inline editing and explicit apply controls.
      </p>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden" style={{ boxShadow: "var(--elevation-sm)", minHeight: 600 }}>
        <div className="flex h-full" style={{ minHeight: 600 }}>
          {/* Background */}
          <div className="flex-1 p-6 bg-[var(--background)] opacity-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center" style={{ fontSize: "var(--text-xl)", fontWeight: "var(--font-weight-semibold)" }}>AM</div>
              <div>
                <h2>Alex Morgan</h2>
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Major Gift Prospect</p>
              </div>
            </div>
          </div>

          {/* Review drawer */}
          <div className="w-[420px] min-w-[420px] bg-[var(--card)] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[var(--primary)]" />
                <h3>Review & Apply</h3>
              </div>
              <button className="p-1 hover:bg-[var(--muted)] rounded-[var(--radius)]"><X size={16} className="text-[var(--muted-foreground)]" /></button>
            </div>

            {/* Trust banner */}
            <div className="px-5 py-2 border-b border-[var(--border)] bg-[var(--primary)]/5">
              <div className="flex items-center gap-2">
                <Info size={14} className="text-[var(--primary)]" />
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">Review each suggestion. Nothing is saved until you click Apply.</p>
              </div>
            </div>

            {/* Scrollable cards */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
              {/* Contact Report Card */}
              {cards.map((card) => (
                <div key={card.id} className={`border rounded-[var(--radius)] overflow-hidden transition-colors ${card.applied ? "border-[var(--chart-1)]/50 bg-[var(--chart-1)]/5" : "border-[var(--border)]"}`}>
                  <button
                    onClick={() => toggleExpand(card.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left"
                  >
                    <card.icon size={16} className={card.applied ? "text-[var(--chart-1)]" : "text-[var(--primary)]"} />
                    <span className="flex-1" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }}>{card.title}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]" style={{ fontSize: "11px" }}>Suggested</span>
                    {card.expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {card.expanded && (
                    <div className="px-4 pb-3 space-y-3">
                      {card.id === "report" && (
                        <>
                          <textarea
                            value={reportText}
                            onChange={(e) => setReportText(e.target.value)}
                            className="w-full h-[100px] p-2 bg-[var(--input-background)] border border-[var(--border)] rounded-[var(--radius)] resize-none text-[var(--foreground)]"
                            style={{ fontSize: "var(--text-sm)" }}
                          />
                          <div className="flex items-center gap-2">
                            <Pencil size={12} className="text-[var(--muted-foreground)]" />
                            <span style={{ fontSize: "11px" }} className="text-[var(--muted-foreground)]">Edit inline — your changes are preserved</span>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                            <input
                              type="checkbox"
                              checked={saveAsNote}
                              onChange={() => setSaveAsNote(!saveAsNote)}
                              className="accent-[var(--primary)]"
                            />
                            <StickyNote size={12} className="text-[var(--primary)]" />
                            <span style={{ fontSize: "var(--text-sm)" }}>Also save as note on constituent overview</span>
                          </div>
                        </>
                      )}

                      {card.id === "actions" && (
                        <div className="space-y-2">
                          {[
                            { action: "Send building plans to Alex Morgan", date: "Mar 27, 2026", owner: "You" },
                            { action: "Schedule campus visit", date: "Apr 2026", owner: "You" },
                          ].map((a) => (
                            <div key={a.action} className="flex items-start gap-2 p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                              <input type="checkbox" defaultChecked className="mt-1 accent-[var(--primary)]" />
                              <div className="flex-1">
                                <p style={{ fontSize: "var(--text-sm)" }}>{a.action}</p>
                                <p style={{ fontSize: "11px" }} className="text-[var(--muted-foreground)]">{a.date} · {a.owner}</p>
                              </div>
                              <button className="p-1 hover:bg-[var(--muted)] rounded-[var(--radius)]"><Pencil size={12} className="text-[var(--muted-foreground)]" /></button>
                            </div>
                          ))}
                        </div>
                      )}

                      {card.id === "opp" && (
                        <div className="p-3 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-[var(--chart-5)]/10 text-[var(--chart-5)]" style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)" }}>Review Required</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between"><span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Name</span><span style={{ fontSize: "var(--text-sm)" }}>Capital Campaign — Science Building</span></div>
                            <div className="flex justify-between"><span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Amount</span><span style={{ fontSize: "var(--text-sm)" }}>$250,000</span></div>
                            <div className="flex justify-between"><span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Stage</span><span style={{ fontSize: "var(--text-sm)" }}>Cultivation → Solicitation</span></div>
                            <div className="flex justify-between"><span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Close Date</span><span style={{ fontSize: "var(--text-sm)" }}>Q2 2026</span></div>
                          </div>
                        </div>
                      )}

                      {card.id === "constituent" && (
                        <div className="space-y-2">
                          {[
                            { field: "Interest", before: "—", after: "Science Building, Naming Opportunities" },
                            { field: "Family", before: "—", after: "Daughter — Chemistry major" },
                          ].map((u) => (
                            <div key={u.field} className="p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                              <p style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }}>{u.field}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] line-through">{u.before}</span>
                                <ArrowRight size={12} className="text-[var(--muted-foreground)]" />
                                <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--chart-1)]">{u.after}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {card.id === "followup" && (
                        <div className="space-y-2">
                          <div className="p-3 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                            <p style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="mb-1">Thank-you / Recap Email</p>
                            <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">
                              Dear Alex, Thank you for taking the time to speak with me today about the capital campaign. I'm excited to share the building plans for the new science building...
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex items-center gap-1 px-3 py-1.5 border border-[var(--border)] rounded-[var(--radius)] hover:bg-[var(--muted)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>
                              <Copy size={12} /> Copy
                            </button>
                            <button className="flex items-center gap-1 px-3 py-1.5 border border-[var(--border)] rounded-[var(--radius)] hover:bg-[var(--muted)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>
                              Save draft
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Apply toggle */}
                      <button
                        onClick={() => toggleApply(card.id)}
                        className={`w-full flex items-center justify-center gap-2 py-2 rounded-[var(--radius)] border transition-colors ${
                          card.applied
                            ? "bg-[var(--chart-1)] text-white border-[var(--chart-1)]"
                            : "bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] hover:border-[var(--primary)]"
                        }`}
                        style={{ fontSize: "var(--text-sm)" }}
                      >
                        {card.applied ? <><Check size={14} /> Applied</> : "Apply"}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sticky footer */}
            <div className="px-5 py-3 border-t border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center justify-between mb-2">
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">{appliedCount} update{appliedCount !== 1 ? "s" : ""} will be saved</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSaved(true)}
                  className="flex-1 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ fontSize: "var(--text-sm)" }}
                  disabled={appliedCount === 0}
                >
                  Save all changes
                </button>
                <button className="px-3 py-2 border border-[var(--border)] rounded-[var(--radius)] hover:bg-[var(--muted)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Draft</button>
                <button className="px-3 py-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Snooze</button>
                <button className="px-3 py-2 text-[var(--destructive)] hover:bg-[var(--destructive)]/10 rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Discard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}