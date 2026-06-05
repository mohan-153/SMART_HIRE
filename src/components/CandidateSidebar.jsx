"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, FileCheck, Bookmark, UserCircle, Zap } from "lucide-react";

export default function CandidateSidebar({ onProfileClick }) {
  const pathname = usePathname();

  const menu = [
    { title: "Dashboard", path: "/candidate/dashboard", icon: <LayoutDashboard size={16} /> },
    { heading: "JOBS" },
    { title: "Browse Jobs", path: "/candidate/jobs/browse", icon: <Search size={16} /> },
    { title: "Applied Jobs", path: "/candidate/jobs/applied", icon: <FileCheck size={16} /> },
    { title: "Saved Jobs", path: "/candidate/jobs/saved", icon: <Bookmark size={16} /> },
    { heading: "ACCOUNT" },
    { title: "Profile", action: "profile", icon: <UserCircle size={16} /> },
  ];

  return (
    <aside style={{ width: "220px", background: "var(--sidebar-bg)", height: "100vh", position: "sticky", top: 0, padding: "0", overflow: "auto", flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ padding: "20px 20px 8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ background: "var(--accent)", borderRadius: "8px", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={14} color="var(--primary-dark)" />
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "17px", color: "white" }}>SmartHire</span>
        </div>
      </div>

      <nav style={{ padding: "12px 12px" }}>
        {menu.map((item, index) =>
          item.heading ? (
            <div key={index} style={{ padding: "16px 10px 6px", fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px", color: "rgba(200,232,212,0.35)", fontFamily: "Syne, sans-serif" }}>
              {item.heading}
            </div>
          ) : item.action === "profile" ? (
            <button key={index} onClick={onProfileClick}
              style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", padding: "10px 12px", borderRadius: "10px", border: "none", cursor: "pointer", fontFamily: "DM Sans, sans-serif", fontSize: "14px", marginBottom: "2px", transition: "all 0.15s", background: "transparent", color: "var(--sidebar-text)", textAlign: "left" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--sidebar-text)"; }}>
              {item.icon} {item.title}
            </button>
          ) : (
            <Link key={index} href={item.path}
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", marginBottom: "2px", textDecoration: "none", fontSize: "14px", fontFamily: "DM Sans, sans-serif", transition: "all 0.15s",
                background: pathname === item.path ? "var(--sidebar-active)" : "transparent",
                color: pathname === item.path ? "var(--sidebar-active-text)" : "var(--sidebar-text)",
                fontWeight: pathname === item.path ? 700 : 400,
              }}>
              {item.icon} {item.title}
            </Link>
          )
        )}
      </nav>
    </aside>
  );
}
