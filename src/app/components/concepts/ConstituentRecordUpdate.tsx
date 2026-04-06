import { useState } from "react";
import { Sparkles, ChevronUp, ChevronDown, Check, Clock, X, Info, Pencil, MapPin, Mail, Phone } from "lucide-react";

const tabs = ["Overview", "Biographical", "Giving", "Prospect management", "Participation", "Communications", "Actions", "Notes", "Attachments", "Add-ins"];

export default function ConstituentRecordUpdate() {
  const [showAiBanner, setShowAiBanner] = useState(true);
  const [addressExpanded, setAddressExpanded] = useState(true);
  const [contactCollapsed, setContactCollapsed] = useState(false);
  const [summaryCollapsed, setSummaryCollapsed] = useState(false);

  return (
    <div className="max-w-[1200px]">
      <h1>Constituent Record — AI Update Applied</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        After Review &amp; Apply, the constituent record reflects AI-suggested changes. Updated tiles highlight modifications with provenance, giving fundraisers confidence and a clear audit trail.
      </p>

      {/* Full-width constituent record mock */}
      <div className="bg-[var(--background)] rounded-[var(--radius)] border border-[var(--border)] overflow-hidden" style={{ boxShadow: "var(--elevation-sm)" }}>

        {/* Top omnibar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[var(--card)] border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-[3px] bg-[var(--foreground)] rounded-sm" />
            <div className="w-5 h-[3px] bg-[var(--foreground)] rounded-sm mt-[3px] -ml-[23px]" />
            <div className="w-5 h-[3px] bg-[var(--foreground)] rounded-sm mt-[6px] -ml-[23px]" />
            <span style={{ fontSize: "var(--text-base)" }} className="ml-3 text-[var(--foreground)]">Blackbaud</span>
          </div>
          <div className="flex items-center gap-3">
            {["Search", "Alerts", "Help"].map((l) => (
              <div key={l} className="w-5 h-5 rounded-[var(--radius)] bg-[var(--muted)]" />
            ))}
            <div className="w-8 h-8 rounded-full bg-[var(--chart-1)]/30 flex items-center justify-center">
              <span style={{ fontSize: "var(--text-sm)" }}>KT</span>
            </div>
          </div>
        </div>

        {/* Constituent header */}
        <div className="px-6 py-5 bg-[var(--card)] border-b border-[var(--border)]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--primary)]/15 flex items-center justify-center shrink-0">
              <span style={{ fontSize: "var(--text-xl)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--primary)]">AM</span>
            </div>
            <div>
              <h2>Alex Morgan</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="px-2 py-0.5 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full" style={{ fontSize: "11px" }}>Major Donor</span>
                <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Head of household</span>
              </div>
            </div>
          </div>

          {/* Action bar */}
          <div className="flex items-center gap-2 mt-4">
            {["Add alert", "Apply workflow", "Mark as"].map((btn) => (
              <button key={btn} className="px-3 py-1.5 bg-[var(--secondary)] border border-[var(--border)] rounded-[var(--radius)] text-[var(--secondary-foreground)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>
                {btn}
              </button>
            ))}
            <button className="px-3 py-1.5 bg-[var(--secondary)] border border-[var(--border)] rounded-[var(--radius)] text-[var(--secondary-foreground)] flex items-center gap-1" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>
              More <ChevronDown size={12} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 mt-4 -mb-5 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-3 py-2 whitespace-nowrap border-b-2 transition-colors ${
                  tab === "Biographical"
                    ? "border-[var(--primary)] text-[var(--primary)]"
                    : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
                style={{ fontSize: "var(--text-sm)" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* AI update banner — persistent after apply */}
        {showAiBanner && (
          <div className="mx-4 mt-4 flex items-center gap-3 px-4 py-3 bg-[var(--primary)]/5 border border-[var(--primary)]/20 rounded-[var(--radius)]">
            <Sparkles size={16} className="text-[var(--primary)] shrink-0" />
            <div className="flex-1">
              <p style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--primary)]">AI-assisted updates applied</p>
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">
                Address updated via Actions Assistant on Mar 26, 2026 at 3:12 PM · Applied by Kelsey Tetrick
              </p>
            </div>
            <button className="px-3 py-1 text-[var(--primary)] border border-[var(--primary)]/30 rounded-[var(--radius)] hover:bg-[var(--primary)]/10" style={{ fontSize: "var(--text-sm)" }}>
              View history
            </button>
            <button onClick={() => setShowAiBanner(false)} className="p-1 hover:bg-[var(--muted)] rounded-[var(--radius)]">
              <X size={14} className="text-[var(--muted-foreground)]" />
            </button>
          </div>
        )}

        {/* Two-column tile grid */}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* Constituent Summary tile */}
            <Tile title="Constituent summary" collapsed={summaryCollapsed} onToggle={() => setSummaryCollapsed(!summaryCollapsed)}>
              {!summaryCollapsed && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="text-[var(--foreground)]">Relationships</h4>
                    {[
                      { name: "Development Corp", type: "Employer", dates: "3/2018 – Present" },
                      { name: "James Morgan", type: "Spouse", dates: "5/2015 – Present" },
                    ].map((r) => (
                      <div key={r.name} className="flex items-center justify-between py-1 border-b border-dashed border-[var(--border)]">
                        <span className="text-[var(--primary)]" style={{ fontSize: "var(--text-sm)" }}>{r.name}</span>
                        <div className="flex items-center gap-3">
                          <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">{r.type}</span>
                          <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">{r.dates}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Tile>

            {/* Assigned Fundraisers tile */}
            <Tile title="Assigned fundraisers">
              <div className="space-y-2">
                {[
                  { name: "Kelsey Tetrick", role: "Primary", date: "3/25/2025 – Present" },
                  { name: "James Courtney", role: "Secondary", date: "2/24/2024 – Present" },
                ].map((f) => (
                  <div key={f.name} className="flex items-center justify-between py-1 border-b border-dashed border-[var(--border)]">
                    <div>
                      <span className="text-[var(--primary)]" style={{ fontSize: "var(--text-sm)" }}>{f.name}</span>
                      <p style={{ fontSize: "11px" }} className="text-[var(--muted-foreground)]">{f.role}</p>
                    </div>
                    <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">{f.date}</span>
                  </div>
                ))}
              </div>
            </Tile>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">

            {/* ★ CONTACT INFORMATION — AI-UPDATED TILE */}
            <div className="bg-[var(--card)] rounded-[var(--radius)] border-2 border-[var(--primary)]/40 relative overflow-hidden" style={{ boxShadow: "var(--elevation-sm)" }}>

              {/* AI sparkle badge */}
              <div className="absolute top-0 right-0 bg-[var(--primary)] text-[var(--primary-foreground)] px-2 py-0.5 rounded-bl-[var(--radius)] flex items-center gap-1">
                <Sparkles size={10} />
                <span style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)" }}>AI Updated</span>
              </div>

              <div className="p-6">
                {/* Tile header */}
                <div className="flex items-center justify-between pb-3">
                  <h2 className="text-[var(--foreground)]" style={{ color: "var(--foreground)" }}>Contact information</h2>
                  <div className="flex items-center gap-1">
                    <button onClick={() => setContactCollapsed(!contactCollapsed)} className="p-1 hover:bg-[var(--muted)] rounded-[var(--radius)]">
                      {contactCollapsed ? <ChevronDown size={16} className="text-[var(--muted-foreground)]" /> : <ChevronUp size={16} className="text-[var(--muted-foreground)]" />}
                    </button>
                  </div>
                </div>

                {!contactCollapsed && (
                  <>
                    {/* Edit toolbar */}
                    <div className="flex items-center gap-3 mb-4">
                      <button className="flex items-center gap-1 px-3 py-1.5 bg-[var(--secondary)] border border-[var(--border)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-regular)" }}>
                        <Pencil size={12} /> Edit
                      </button>
                      <label className="flex items-center gap-2 ml-auto" style={{ fontSize: "var(--text-sm)" }}>
                        <input type="checkbox" className="accent-[var(--primary)]" />
                        Include inactive
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {/* Addresses */}
                      <div>
                        <h4 className="mb-3 text-[var(--foreground)]">Addresses</h4>

                        {/* ★ UPDATED ADDRESS — highlighted */}
                        <div className="relative mb-4 p-3 bg-[var(--primary)]/5 border border-[var(--primary)]/20 rounded-[var(--radius)]">
                          <div className="flex items-center gap-1.5 mb-2">
                            <Sparkles size={12} className="text-[var(--primary)]" />
                            <span className="text-[var(--primary)]" style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)" }}>Updated by AI · Mar 26, 2026</span>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <MapPin size={12} className="text-[var(--muted-foreground)]" />
                              <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">Home</span>
                              <span className="w-2 h-2 rounded-full bg-[var(--chart-1)]" />
                            </div>
                            <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">742 Evergreen Terrace</p>
                            <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">Springfield, IL 62704</p>
                          </div>

                          {/* Before/after diff */}
                          {addressExpanded && (
                            <div className="mt-3 pt-2 border-t border-[var(--primary)]/15 space-y-1">
                              <p style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">Previous</p>
                              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] line-through">164 Applegate Drive</p>
                              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] line-through">Drexel Hill, PA 19026</p>
                            </div>
                          )}

                          <button
                            onClick={() => setAddressExpanded(!addressExpanded)}
                            className="flex items-center gap-1 mt-2 text-[var(--primary)]"
                            style={{ fontSize: "11px" }}
                          >
                            {addressExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                            {addressExpanded ? "Hide previous" : "Show previous"}
                          </button>

                          {/* Undo action */}
                          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[var(--primary)]/15">
                            <button className="flex items-center gap-1 text-[var(--destructive)]" style={{ fontSize: "11px" }}>
                              <X size={10} /> Undo this change
                            </button>
                          </div>
                        </div>

                        {/* Unchanged address */}
                        <div className="mb-2 space-y-1">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-[var(--muted-foreground)]" />
                            <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">Business</span>
                          </div>
                          <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">1234 Main Street</p>
                          <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">Drexel Hill, PA 19026</p>
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div>
                        <h4 className="mb-3 text-[var(--foreground)]">Email addresses</h4>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <Mail size={12} className="text-[var(--muted-foreground)]" />
                            <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">Business</span>
                            <span className="w-2 h-2 rounded-full bg-[var(--chart-1)]" />
                          </div>
                          <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--primary)]">amorgan@dev.com</p>
                        </div>

                        <h4 className="mb-3 text-[var(--foreground)]">Phone numbers</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone size={12} className="text-[var(--muted-foreground)]" />
                            <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">Mobile</span>
                            <span className="w-2 h-2 rounded-full bg-[var(--chart-1)]" />
                          </div>
                          <p style={{ fontSize: "var(--text-sm)" }}>(610) 643-8533</p>
                        </div>
                      </div>
                    </div>

                    {/* Provenance footer */}
                    <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center gap-2">
                      <Info size={12} className="text-[var(--muted-foreground)]" />
                      <p style={{ fontSize: "11px" }} className="text-[var(--muted-foreground)]">
                        Change applied via Actions Assistant after phone call with Alex Morgan · Source: constituent verbal confirmation
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Constituent Codes tile (normal, no AI) */}
            <Tile title="Constituent codes">
              <div className="space-y-2">
                {[
                  { code: "Alumni", date: "12/06/2022 – present" },
                  { code: "Current student", date: "8/1/2020 – 12/06/2022" },
                ].map((c) => (
                  <div key={c.code} className="flex items-center justify-between py-1 border-b border-dashed border-[var(--border)]">
                    <span style={{ fontSize: "var(--text-sm)" }}>{c.code}</span>
                    <span style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">{c.date}</span>
                  </div>
                ))}
              </div>
            </Tile>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[var(--card)] border-t border-[var(--border)]">
          <Check size={14} className="text-[var(--chart-1)]" />
          <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">All AI-suggested changes have been reviewed and applied.</p>
          <div className="flex-1" />
          <Clock size={14} className="text-[var(--muted-foreground)]" />
          <p style={{ fontSize: "11px" }} className="text-[var(--muted-foreground)]">Last updated: Mar 26, 2026 3:12 PM</p>
        </div>
      </div>
    </div>
  );
}

/* Reusable SKY UX-style tile wrapper */
function Tile({ title, children, collapsed, onToggle }: { title: string; children: React.ReactNode; collapsed?: boolean; onToggle?: () => void }) {
  const [localCollapsed, setLocalCollapsed] = useState(false);
  const isCollapsed = collapsed ?? localCollapsed;
  const toggle = onToggle ?? (() => setLocalCollapsed(!localCollapsed));

  return (
    <div className="bg-[var(--card)] rounded-[var(--radius)] border border-[var(--border)] overflow-hidden" style={{ boxShadow: "var(--elevation-sm)" }}>
      <div className="p-6">
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-[var(--foreground)]">{title}</h2>
          <button onClick={toggle} className="p-1 hover:bg-[var(--muted)] rounded-[var(--radius)]">
            {isCollapsed ? <ChevronDown size={16} className="text-[var(--muted-foreground)]" /> : <ChevronUp size={16} className="text-[var(--muted-foreground)]" />}
          </button>
        </div>
        {!isCollapsed && children}
      </div>
    </div>
  );
}
