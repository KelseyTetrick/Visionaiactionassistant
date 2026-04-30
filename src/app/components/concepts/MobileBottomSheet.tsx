import { useState } from "react";
import { Phone, Clock, User, Check, Sparkles, ChevronUp, X } from "lucide-react";

export default function MobileBottomSheet() {
  const [sheetState, setSheetState] = useState<"peek" | "expanded" | "closed">("peek");

  return (
    <div className="max-w-[900px]">
      <h1>Mobile: Bottom Sheet Preview</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Completed action screen with a bottom sheet preview that appears after tapping "Complete action."
      </p>

      {/* Mobile device frame */}
      <div className="mx-auto" style={{ maxWidth: 390 }}>
        <div className="bg-[var(--foreground)] rounded-[24px] p-2 overflow-hidden" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="bg-[var(--background)] rounded-[18px] overflow-hidden relative" style={{ height: 750 }}>
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 py-2 bg-[var(--card)]">
              <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }}>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-[var(--foreground)] rounded-sm" />
                <div className="w-4 h-2 bg-[var(--foreground)] rounded-sm" />
                <div className="w-6 h-3 border border-[var(--foreground)] rounded-sm"><div className="w-4 h-2 bg-[var(--chart-1)] rounded-sm m-[1px]" /></div>
              </div>
            </div>

            {/* App header */}
            <div className="bg-[var(--card)] px-4 py-3 border-b border-[var(--border)]">
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">← Back to Actions</p>
              <h2 className="mt-1">Alex Morgan</h2>
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Major Gift Prospect</p>
            </div>

            {/* Completed action card */}
            <div className="p-4">
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-4" style={{ boxShadow: "var(--elevation-sm)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--chart-1)] flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--text-base)" }}>Action Completed</p>
                </div>
                <div className="space-y-2 ml-8">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[var(--muted-foreground)]" />
                    <span style={{ fontSize: "var(--text-sm)" }}>Phone Call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[var(--muted-foreground)]" />
                    <span style={{ fontSize: "var(--text-sm)" }}>March 26, 2026 · 2:30 PM · 45 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-[var(--muted-foreground)]" />
                    <span style={{ fontSize: "var(--text-sm)" }}>Alex Morgan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom sheet */}
            <div
              className="absolute left-0 right-0 bottom-0 bg-[var(--card)] rounded-t-[16px] transition-all duration-300"
              style={{
                boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
                height: sheetState === "peek" ? 180 : sheetState === "expanded" ? 500 : 0,
              }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-2 pb-1">
                <div className="w-10 h-1 bg-[var(--muted)] rounded-full" />
              </div>

              {sheetState !== "closed" && (
                <div className="px-5 py-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-[var(--primary)]" />
                      <p style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--text-base)" }}>Post-Action Follow-Through</p>
                    </div>
                    <button onClick={() => setSheetState("closed")} className="p-1">
                      <X size={16} className="text-[var(--muted-foreground)]" />
                    </button>
                  </div>

                  <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] mb-4">
                    Capture what just happened (30 seconds).
                  </p>

                  {sheetState === "peek" && (
                    <div className="space-y-2">
                      <button
                        onClick={() => setSheetState("expanded")}
                        className="w-full py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] flex items-center justify-center gap-2"
                        style={{ fontSize: "var(--text-sm)" }}
                      >
                        <ChevronUp size={14} />
                        Start Capture
                      </button>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 text-[var(--muted-foreground)] bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Snooze</button>
                        <button className="flex-1 py-2 text-[var(--muted-foreground)] bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Dismiss</button>
                      </div>
                    </div>
                  )}

                  {sheetState === "expanded" && (
                    <div>
                      <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Tap "Start Capture" opens the Quick Capture flow →</p>
                      <button onClick={() => setSheetState("peek")} className="mt-4 w-full py-2 border border-[var(--border)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>Collapse</button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Closed state - show snooze banner */}
            {sheetState === "closed" && (
              <div className="absolute bottom-4 left-4 right-4 bg-[var(--card)] border border-[var(--primary)]/30 rounded-[var(--radius)] p-3 flex items-center gap-2" style={{ boxShadow: "var(--elevation-sm)" }}>
                <Sparkles size={14} className="text-[var(--primary)]" />
                <p style={{ fontSize: "var(--text-sm)" }} className="flex-1">Capture notes from your call?</p>
                <button onClick={() => setSheetState("peek")} className="px-2 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)]" style={{ fontSize: "11px" }}>Open</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
