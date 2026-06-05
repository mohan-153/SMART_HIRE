"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusCircle, Briefcase, FileText, Users, UserCheck, UserX, Bell, Zap } from "lucide-react";

export default function RecruiterSidebar() {
  const pathname = usePathname();

  const menu = [
    { title: "Dashboard", path: "/recruiter/dashboard", icon: <LayoutDashboard size={16} /> },
    { heading: "JOBS" },
    { title: "Post a Job", path: "/recruiter/jobs/post", icon: <PlusCircle size={16} /> },
    { title: "My Jobs", path: "/recruiter/jobs/my-jobs", icon: <Briefcase size={16} /> },
    { title: "Draft Jobs", path: "/recruiter/jobs/drafts", icon: <FileText size={16} /> },
    { heading: "APPLICATIONS" },
    { title: "All Applicants", path: "/recruiter/applicants/all", icon: <Users size={16} /> },
    { title: "Shortlisted", path: "/recruiter/applicants/shortlisted", icon: <UserCheck size={16} /> },
    { title: "Rejected", path: "/recruiter/applicants/rejected", icon: <UserX size={16} /> },
    { heading: "OTHER" },
    { title: "Notifications", path: "/recruiter/notifications", icon: <Bell size={16} /> },
  ];

  return (
    <aside style={{ width: "220px", background: "var(--sidebar-bg)", height: "100vh", position: "sticky", top: 0, padding: "0", overflow: "auto", flexShrink: 0 }}>
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
