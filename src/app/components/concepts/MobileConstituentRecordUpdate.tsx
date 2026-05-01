import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, X, Info, MapPin, Phone, Mail, UserCog } from "lucide-react";

const aiUpdateColor = "#7A04DD";

export default function MobileConstituentRecordUpdate() {
  const [addressExpanded, setAddressExpanded] = useState(true);

  return (
    <div className="max-w-[900px]">
      <h1>Mobile: Record Update</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Mobile view of the AI-updated constituent record, showing how the update page responds on a phone.
      </p>

      <div className="mx-auto" style={{ maxWidth: 390 }}>
        <div className="bg-[var(--foreground)] rounded-[24px] p-2 overflow-hidden" style={{ boxShadow: "var(--elevation-sm)" }}>
          <div className="bg-[var(--card)] rounded-[18px] overflow-hidden flex flex-col" style={{ height: 750 }}>
            <div className="flex items-center justify-between px-6 py-2 bg-[var(--card)] border-b border-[var(--border)]">
              <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }}>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-[var(--foreground)] rounded-sm" />
                <div className="w-4 h-2 bg-[var(--foreground)] rounded-sm" />
                <div className="w-6 h-3 border border-[var(--foreground)] rounded-sm"><div className="w-4 h-2 bg-[var(--chart-1)] rounded-sm m-[1px]" /></div>
              </div>
            </div>

            <div className="px-4 py-3 border-b border-[var(--border)]">
              <p className="text-[var(--primary)]" style={{ fontSize: "var(--text-sm)" }}>← Back to Actions</p>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <h2>Record Update</h2>
                  <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">Alex Morgan · Major Donor</p>
                </div>
                <div className="rounded-full px-3 py-1" style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)", backgroundColor: aiUpdateColor, color: "#ffffff" }}>
                  AI Updated
                </div>
              </div>
            </div>

            <div className="px-4 py-3 overflow-y-auto flex-1 space-y-4">
              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--background)] p-4" style={{ boxShadow: "var(--elevation-sm)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-[#7A04DD]" />
                  <div>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)", color: aiUpdateColor }}>AI-suggested updates</p>
                    <p style={{ fontSize: "11px" }} className="text-[var(--muted-foreground)]">Reviewed and applied after phone call.</p>
                  </div>
                </div>

                <div className="rounded-[var(--radius)] p-3" style={{ backgroundColor: "rgba(122, 4, 221, 0.08)", border: "1px solid rgba(122, 4, 221, 0.15)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#7A04DD]" />
                      <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)", color: aiUpdateColor }}>Address updated by AI</span>
                    </div>
                    <span className="text-[var(--muted-foreground)]" style={{ fontSize: "11px" }}>Mar 26, 2026</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[var(--muted-foreground)]" />
                      <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">Home</span>
                    </div>
                    <p style={{ fontSize: "var(--text-sm)", color: aiUpdateColor }}>742 Evergreen Terrace</p>
                    <p style={{ fontSize: "var(--text-sm)", color: aiUpdateColor }}>Springfield, IL 62704</p>

                    {addressExpanded ? (
                      <div className="mt-3 pt-2" style={{ borderTop: "1px solid rgba(122, 4, 221, 0.15)" }}>
                        <p style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--muted-foreground)]">Previous</p>
                        <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] line-through">164 Applegate Drive</p>
                        <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] line-through">Drexel Hill, PA 19026</p>
                      </div>
                    ) : null}

                    <button onClick={() => setAddressExpanded(!addressExpanded)} className="mt-2 flex items-center gap-1" style={{ fontSize: "11px", color: aiUpdateColor }}>
                      {addressExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      {addressExpanded ? "Hide previous" : "Show previous"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={14} className="text-[var(--muted-foreground)]" />
                  <span className="text-[var(--muted-foreground)]" style={{ fontSize: "var(--text-sm)" }}>Phone</span>
                </div>
                <p style={{ fontSize: "var(--text-sm)" }}>(610) 643-8533</p>
              </div>

              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={14} className="text-[var(--muted-foreground)]" />
                  <span className="text-[var(--muted-foreground)]" style={{ fontSize: "var(--text-sm)" }}>Email</span>
                </div>
                <p style={{ fontSize: "var(--text-sm)" }}>amorgan@dev.com</p>
              </div>

              <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-4 flex items-center gap-2">
                <Info size={14} className="text-[var(--muted-foreground)]" />
                <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">AI changes were applied after review. Swipe to see detail on desktop.</p>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--card)]">
              <button className="w-full py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[var(--radius)]" style={{ fontSize: "var(--text-sm)" }}>
                View full record
              </button>
            </div>

            <div className="flex justify-center pb-2 pt-2">
              <div className="w-32 h-1 bg-[var(--muted)] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
