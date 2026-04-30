import { useState } from "react";
import { Sparkles, X, Phone, Clock, User, Info, Bell } from "lucide-react";

export default function DesktopPostAction() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [snoozeBanner, setSnoozeBanner] = useState(false);

  return (
    <div className="max-w-[1200px]">
      <h1>Post-Action Trigger State</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Desktop right-side drawer that appears immediately after a fundraiser completes an action.
      </p>

      {/* Simulated constituent record page with drawer */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden" style={{ boxShadow: "var(--elevation-sm)", minHeight: 600 }}>
        <div className="flex h-full" style={{ minHeight: 600 }}>
          {/* Main content area - constituent record simulation */}
          <div className="flex-1 p-6 border-r border-[var(--border)] bg-[var(--background)]">
            {/* Snooze banner */}
            {snoozeBanner && (
              <div className="mb-4 p-3 bg-[var(--card)] border border-[var(--primary)]/30 rounded-[var(--radius)] flex items-center gap-3" style={{ boxShadow: "var(--elevation-sm)" }}>
                <Bell size={16} className="text-[var(--primary)] shrink-0" />
                <p style={{ fontSize: "var(--text-sm)" }} className="flex-1">Want help capturing notes from your meeting with Alex Morgan?</p>
                <button onClick={() => { setDrawerOpen(true); setSnoozeBanner(false); }} className="px-3 py-1 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)" }}>Capture now</button>
                <button onClick={() => setSnoozeBanner(false)} className="px-3 py-1 bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)" }}>Dismiss</button>
              </div>
            )}

            {/* Fake constituent header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center" style={{ fontSize: "var(--text-xl)", fontWeight: "var(--font-weight-semibold)" }}>AM</div>
              <div>
                <h2>Alex Morgan</h2>
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Major Gift Prospect · $500K capacity</p>
              </div>
            </div>

            {/* Fake tabs */}
            <div className="flex gap-1 border-b border-[var(--border)] mb-4">
              {["Summary", "Actions", "Giving", "Relationships"].map((tab, i) => (
                <button key={tab} className={`px-4 py-2 border-b-2 ${i === 1 ? "border-[var(--primary)] text-[var(--primary)]" : "border-transparent text-[var(--muted-foreground)]"}`} style={{ fontSize: "var(--text-sm)", fontWeight: i === 1 ? "var(--font-weight-semibold)" : "var(--font-weight-regular)" }}>{tab}</button>
              ))}
            </div>

            {/* Fake completed action */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-4 mb-3" style={{ boxShadow: "var(--elevation-sm)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-[var(--chart-1)] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--text-base)" }}>Phone Call — Completed</p>
              </div>
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">March 26, 2026 · 2:30 PM · 45 min</p>
            </div>

            <div className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-4" style={{ boxShadow: "var(--elevation-sm)" }}>
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Previous actions and timeline content would appear here...</p>
            </div>
          </div>

          {/* Right-side drawer */}
          {drawerOpen && (
            <div className="w-[380px] min-w-[380px] bg-[var(--card)] flex flex-col">
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-[var(--primary)]" />
                  <h3>Actions Assistant</h3>
                </div>
                <button onClick={() => { setDrawerOpen(false); setSnoozeBanner(true); }} className="p-1 hover:bg-[var(--muted)] rounded-[var(--radius)]">
                  <X size={16} className="text-[var(--muted-foreground)]" />
                </button>
              </div>

              {/* Context card */}
              <div className="px-5 py-4">
                <div className="bg-[var(--muted)] rounded-[var(--radius)] p-4">
                  <label className="text-[var(--muted-foreground)] mb-2 block" style={{ fontWeight: "var(--font-weight-semibold)" }}>Completed Action</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-[var(--primary)]" />
                      <span style={{ fontSize: "var(--text-sm)" }}>Phone Call</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[var(--primary)]" />
                      <span style={{ fontSize: "var(--text-sm)" }}>March 26, 2026 · 2:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-[var(--primary)]" />
                      <span style={{ fontSize: "var(--text-sm)" }}>Alex Morgan</span>
                    </div>
                  </div>
                </div>

                {/* Trust microcopy */}
                <div className="flex items-center gap-2 mt-3 px-3 py-2 bg-[var(--primary)]/5 rounded-[var(--radius)]">
                  <Info size={14} className="text-[var(--primary)] shrink-0" />
                  <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">Nothing is saved until you click Apply.</p>
                </div>
              </div>

              {/* Framing message */}
              <div className="px-5 pb-4 flex-1">
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-3">
                    <Sparkles size={20} className="text-[var(--primary)]" />
                  </div>
                  <h3>Capture what just happened</h3>
                  <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] mt-1 mb-6">While it's fresh — it only takes 30 seconds.</p>

                  <button className="w-full py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)] hover:opacity-90 transition-opacity">
                    Start Capture
                  </button>
                </div>
              </div>

              {/* Drawer footer */}
              <div className="px-5 py-3 border-t border-[var(--border)] flex items-center gap-2">
                <button className="px-3 py-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }} onClick={() => { setDrawerOpen(false); setSnoozeBanner(true); }}>Snooze</button>
                <button className="px-3 py-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }} onClick={() => setDrawerOpen(false)}>Dismiss</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
