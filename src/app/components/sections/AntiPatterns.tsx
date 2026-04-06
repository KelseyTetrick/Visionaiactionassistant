import { Ban, MessageCircle, CalendarClock, Bot, ClipboardList, EyeOff } from "lucide-react";

const antiPatterns = [
  { icon: MessageCircle, title: "Full-Page Chat Experiences", reason: "Blurs boundaries with conversational agents. The assistant is contextual, not a chatbot." },
  { icon: CalendarClock, title: "Pre-Action Planning Flows", reason: "Planning is the domain of the Cultivation Assistant. This tool is explicitly post-action follow-through." },
  { icon: Bot, title: "Autonomous Execution States", reason: "Undermines the trust model. The Development Agent handles autonomous outreach — not this assistant." },
  { icon: ClipboardList, title: "Dense, Required Forms", reason: "Defeats the purpose of narrative-first capture. Forms create friction and reduce adoption." },
  { icon: EyeOff, title: "Hidden Persistence", reason: "Silent saves, background changes, or auto-saving violates the explicit save semantics and erodes trust." },
];

export default function AntiPatterns() {
  return (
    <div className="max-w-[900px]">
      <h1>Anti-Patterns</h1>
      <p className="text-[var(--muted-foreground)] mt-1 mb-6">
        Patterns explicitly excluded from the Actions Assistant to preserve trust boundaries and product differentiation.
      </p>

      <div className="bg-[var(--destructive)]/5 border border-[var(--destructive)]/20 rounded-[var(--radius)] p-4 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Ban size={16} className="text-[var(--destructive)]" />
          <p style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-semibold)" }} className="text-[var(--destructive)]">Do Not Generate</p>
        </div>
        <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">
          These patterns would blur boundaries with the Cultivation Assistant or Development Agent and undermine the trust model.
        </p>
      </div>

      <div className="space-y-3">
        {antiPatterns.map((ap) => (
          <div key={ap.title} className="bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius)] p-4 flex gap-4 items-start" style={{ boxShadow: "var(--elevation-sm)" }}>
            <div className="w-10 h-10 rounded-[var(--radius)] bg-[var(--destructive)]/10 flex items-center justify-center shrink-0">
              <ap.icon size={18} className="text-[var(--destructive)]" />
            </div>
            <div>
              <h4>{ap.title}</h4>
              <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)] mt-1">{ap.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
