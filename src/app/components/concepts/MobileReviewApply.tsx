import { useState } from "react";
import {
  Sparkles, FileText, Target, TrendingUp, UserCog, Mail,
  ChevronDown, ChevronUp, Check, Pencil, Copy, Info, CheckCircle, StickyNote,
} from "lucide-react";

interface Card {
  id: string;
  icon: React.ElementType;
  title: string;
  applied: boolean;
  expanded: boolean;
}

export default function MobileReviewApply() {
  const [cards, setCards] = useState<Card[]>([
    { id: "report", icon: FileText, title: "Contact Report", applied: false, expanded: true },
    { id: "actions", icon: Target, title: "Next Actions", applied: false, expanded: false },
    { id: "opp", icon: TrendingUp, title: "Opportunity", applied: false, expanded: false },
    { id: "constituent", icon: UserCog, title: "Constituent Updates", applied: false, expanded: false },
    { id: "followup", icon: Mail, title: "Follow-Up Draft", applied: false, expanded: false },
  ]);
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState(false);
  const [saveAsNote, setSaveAsNote] = useState(true);

  const toggle = (id: string, field: "expanded" | "applied") => {
    setCards((p) => p.map((c) => (c.id === id ? { ...c, [field]: !c[field] } : c)));
  };

  const appliedCount = cards.filter((c) => c.applied).length;

  const handleSave = () => {
    setSaved(true);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <div className="max-w-[900px]">
      <h1>Mobile: Review & Apply</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Collapsible review cards with individual Apply actions and confirmation toast.
      </p>

      <div className="mx-auto" style={{ maxWidth: 390 }}>
        <div className="bg-[var(--foreground)] rounded-[24px] p-2 overflow-hidden" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="bg-[var(--card)] rounded-[18px] overflow-hidden flex flex-col relative" style={{ height: 750 }}>
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
                <p style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--text-base)" }}>Review & Apply</p>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[var(--muted)]" style={{ fontSize: "11px" }}>{appliedCount} selected</span>
            </div>

            {/* Trust badge */}
            <div className="mx-4 mt-3 flex items-center gap-2 px-3 py-2 bg-[var(--primary)]/5 rounded-[var(--radius)]">
              <Info size={12} className="text-[var(--primary)] shrink-0" />
              <p style={{ fontSize: "11px" }} className="text-[var(--primary)]">Review each suggestion before saving.</p>
            </div>

            {/* Scrollable cards */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
              {saved ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-14 h-14 rounded-full bg-[var(--chart-1)]/10 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-[var(--chart-1)]" />
                  </div>
                  <h3 className="mb-2">Saved to Record</h3>
                  <div className="space-y-1 text-center">
                    <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Contact report saved</p>
                    <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Note added to overview</p>
                    <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">2 actions created</p>
                    <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Opportunity updated</p>
                  </div>
                  <button onClick={() => setSaved(false)} className="mt-6 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)" }}>View Record</button>
                </div>
              ) : (
                cards.map((card) => (
                  <div key={card.id} className={`border rounded-[var(--radius)] overflow-hidden ${card.applied ? "border-[var(--chart-1)]/50 bg-[var(--chart-1)]/5" : "border-[var(--border)]"}`}>
                    <button onClick={() => toggle(card.id, "expanded")} className="w-full flex items-center gap-2 px-3 py-3 text-left">
                      <card.icon size={14} className={card.applied ? "text-[var(--chart-1)]" : "text-[var(--primary)]"} />
                      <span className="flex-1" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }}>{card.title}</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]" style={{ fontSize: "10px" }}>Suggested</span>
                      {card.expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>

                    {card.expanded && (
                      <div className="px-3 pb-3 space-y-2">
                        {card.id === "report" && (
                          <div className="p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                            <p style={{ fontSize: "var(--text-sm)" }}>Spoke with Alex about the capital campaign. She's very interested in the science building — daughter is a chemistry major. Wants to commit by Q2. Asked for building plans and campus visit in April.</p>
                            <button className="flex items-center gap-1 mt-2 text-[var(--primary)]" style={{ fontSize: "11px" }}><Pencil size={10} /> Edit</button>
                            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[var(--border)]">
                              <input type="checkbox" checked={saveAsNote} onChange={() => setSaveAsNote(!saveAsNote)} className="accent-[var(--primary)]" />
                              <StickyNote size={10} className="text-[var(--primary)]" />
                              <span style={{ fontSize: "11px" }}>Also save as note on overview</span>
                            </div>
                          </div>
                        )}
                        {card.id === "actions" && (
                          <div className="space-y-1.5">
                            {["Send building plans — Mar 27", "Schedule campus visit — Apr 2026"].map((a) => (
                              <div key={a} className="flex items-center gap-2 p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                                <input type="checkbox" defaultChecked className="accent-[var(--primary)]" />
                                <span style={{ fontSize: "var(--text-sm)" }}>{a}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {card.id === "opp" && (
                          <div className="p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                            <span className="px-1.5 py-0.5 rounded-full bg-[var(--chart-5)]/10 text-[var(--chart-5)]" style={{ fontSize: "10px", fontWeight: "var(--font-weight-semibold)" }}>Review Required</span>
                            <p style={{ fontSize: "var(--text-sm)" }} className="mt-1">Capital Campaign — Science Building · $250K · Cultivation → Solicitation</p>
                          </div>
                        )}
                        {card.id === "constituent" && (
                          <div className="space-y-1.5">
                            {[{ f: "Interest", v: "Science Building, Naming" }, { f: "Family", v: "Daughter — Chemistry major" }].map((u) => (
                              <div key={u.f} className="p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                                <p style={{ fontSize: "11px" }} className="text-[var(--muted-foreground)]">{u.f}</p>
                                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--chart-1)]">{u.v}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        {card.id === "followup" && (
                          <div className="p-2 bg-[var(--muted)]/50 rounded-[var(--radius)]">
                            <p style={{ fontSize: "var(--text-sm)" }}>Dear Alex, Thank you for speaking with me today about the capital campaign...</p>
                            <div className="flex gap-2 mt-2">
                              <button className="flex items-center gap-1 px-2 py-1 border border-[var(--border)] rounded-[var(--radius)]" style={{ fontSize: "11px", fontWeight: "var(--font-weight-regular)" }}><Copy size={10} /> Copy</button>
                              <button className="px-2 py-1 border border-[var(--border)] rounded-[var(--radius)]" style={{ fontSize: "11px", fontWeight: "var(--font-weight-regular)" }}>Save draft</button>
                            </div>
                          </div>
                        )}

                        <button
                          onClick={() => toggle(card.id, "applied")}
                          className={`w-full py-2 rounded-[var(--radius)] border transition-colors ${
                            card.applied ? "bg-[var(--chart-1)] text-white border-[var(--chart-1)]" : "border-[var(--border)] hover:border-[var(--primary)]"
                          }`}
                          style={{ fontSize: "var(--text-sm)" }}
                        >
                          {card.applied ? <span className="flex items-center justify-center gap-1"><Check size={12} /> Applied</span> : "Apply"}
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {!saved && (
              <div className="px-4 py-3 border-t border-[var(--border)]">
                <button
                  onClick={handleSave}
                  className="w-full py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] mb-2 disabled:opacity-50"
                  style={{ fontSize: "var(--text-sm)" }}
                  disabled={appliedCount === 0}
                >
                  Save to record ({appliedCount})
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-[var(--muted-foreground)] bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Snooze</button>
                  <button className="flex-1 py-2 text-[var(--destructive)] bg-[var(--destructive)]/5 rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Discard</button>
                </div>
              </div>
            )}

            {/* Home indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-32 h-1 bg-[var(--muted)] rounded-full" />
            </div>

            {/* Toast */}
            {toast && (
              <div className="absolute top-14 left-4 right-4 bg-[var(--foreground)] text-[var(--background)] px-4 py-3 rounded-[var(--radius)] flex items-center gap-2" style={{ boxShadow: "var(--elevation-sm)" }}>
                <CheckCircle size={16} className="text-[var(--chart-1)]" />
                <p style={{ fontSize: "var(--text-sm)" }}>Contact report saved · Note added · 2 actions created · Opportunity updated</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}