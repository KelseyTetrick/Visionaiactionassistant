import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Shield,
  Workflow,
  LogOut,
  Ban,
  Monitor,
  Smartphone,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  UserCog,
} from "lucide-react";

const navSections = [
  { label: "Overview", path: "/", icon: LayoutDashboard },
  { label: "Design Principles", path: "/design-principles", icon: Shield },
  { label: "Patterns & Behaviors", path: "/patterns", icon: Workflow },
  { label: "Control & Exit", path: "/control-exit", icon: LogOut },
  { label: "Anti-Patterns", path: "/anti-patterns", icon: Ban },
];

const conceptItems = [
  { label: "Post-Action Trigger", path: "/concepts/desktop-post-action", icon: Monitor, group: "Desktop" },
  { label: "Quick Capture", path: "/concepts/desktop-quick-capture", icon: Monitor, group: "Desktop" },
  { label: "Review & Apply", path: "/concepts/desktop-review-apply", icon: Monitor, group: "Desktop" },
  { label: "Bottom Sheet Preview", path: "/concepts/mobile-bottom-sheet", icon: Smartphone, group: "Mobile" },
  { label: "Quick Capture", path: "/concepts/mobile-quick-capture", icon: Smartphone, group: "Mobile" },
  { label: "Review & Apply", path: "/concepts/mobile-review-apply", icon: Smartphone, group: "Mobile" },
  { label: "Record Update", path: "/concepts/constituent-record-update", icon: UserCog, group: "Desktop" },
];

export default function Layout() {
  const [conceptsOpen, setConceptsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const desktopConcepts = conceptItems.filter((c) => c.group === "Desktop");
  const mobileConcepts = conceptItems.filter((c) => c.group === "Mobile");

  const navContent = (
    <nav className="flex flex-col gap-[2px] py-3">
      {navSections.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-[var(--radius)] mx-2 transition-colors ${
              isActive
                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                : "text-[var(--sidebar-foreground)] hover:bg-[var(--muted)]"
            }`
          }
          style={{ fontSize: "var(--text-sm)" }}
        >
          <item.icon size={16} />
          {item.label}
        </NavLink>
      ))}

      {/* Design Concepts accordion */}
      <button
        onClick={() => setConceptsOpen(!conceptsOpen)}
        className="flex items-center gap-3 px-4 py-2 mx-2 rounded-[var(--radius)] text-[var(--sidebar-foreground)] hover:bg-[var(--muted)] transition-colors w-full text-left"
        style={{ fontSize: "var(--text-sm)" }}
      >
        <Sparkles size={16} />
        <span className="flex-1">Design Concepts</span>
        {conceptsOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>

      {conceptsOpen && (
        <div className="ml-4">
          <p
            className="px-4 py-1 text-[var(--muted-foreground)] uppercase tracking-wider"
            style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)" }}
          >
            Desktop
          </p>
          {desktopConcepts.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-[6px] rounded-[var(--radius)] mx-2 transition-colors ${
                  isActive
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                    : "text-[var(--sidebar-foreground)] hover:bg-[var(--muted)]"
                }`
              }
              style={{ fontSize: "var(--text-sm)" }}
            >
              <item.icon size={14} />
              {item.label}
            </NavLink>
          ))}

          <p
            className="px-4 py-1 mt-2 text-[var(--muted-foreground)] uppercase tracking-wider"
            style={{ fontSize: "11px", fontWeight: "var(--font-weight-semibold)" }}
          >
            Mobile
          </p>
          {mobileConcepts.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-[6px] rounded-[var(--radius)] mx-2 transition-colors ${
                  isActive
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                    : "text-[var(--sidebar-foreground)] hover:bg-[var(--muted)]"
                }`
              }
              style={{ fontSize: "var(--text-sm)" }}
            >
              <item.icon size={14} />
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[var(--background)]">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-[260px] min-w-[260px] bg-[var(--sidebar)] border-r border-[var(--sidebar-border)] h-full">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-[var(--sidebar-border)]">
          <Sparkles size={20} className="text-[var(--primary)]" />
          <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-semibold)" }}>
            Actions Assistant
          </span>
        </div>
        <div className="flex-1 overflow-y-auto">{navContent}</div>
        <div className="px-5 py-3 border-t border-[var(--sidebar-border)]">
          <p style={{ fontSize: "var(--text-sm)" }} className="text-[var(--muted-foreground)]">
            Raiser's Edge NXT
          </p>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="flex flex-col flex-1 min-w-0">
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-[var(--card)] border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[var(--primary)]" />
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-semibold)" }}>
              Actions Assistant
            </span>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[52px] left-0 right-0 bottom-0 z-50 bg-[var(--sidebar)] border-b border-[var(--border)] overflow-y-auto">
            {navContent}
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}