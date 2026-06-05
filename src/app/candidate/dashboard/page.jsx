"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { User, Briefcase, FileText, TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CandidateDashboard() {
  const [candidate, setCandidate] = useState({ firstName: "", profileCompletion: 0, totalApplications: 0, resumeUploaded: false });
  const [profileStatus, setProfileStatus] = useState({ personal: false, skills: false, resume: false });

  useEffect(() => { loadDashboard(); }, []);

  const loadDashboard = async () => {
    try {
      const userRes = await axios.get("/api/auth/me");
      const candidateId = userRes.data.user._id;
      const profileRes = await axios.get(`/api/candidate/profile?candidateId=${candidateId}`);
      const profile = profileRes.data.profile;
      const resumeUploaded = !!profile?.resumeUrl;
      let completed = 0;
      if (profile?.phone && profile?.location) completed += 40;
      if (profile?.skills?.length && profile?.education && profile?.experience) completed += 40;
      if (resumeUploaded) completed += 20;
      setCandidate({ firstName: userRes.data.user.firstName, profileCompletion: completed, totalApplications: 0, resumeUploaded });
      setProfileStatus({ personal: !!(profile?.phone && profile?.location), skills: !!(profile?.skills?.length && profile?.education && profile?.experience), resume: !!profile?.resumeUrl });
    } catch (error) {
      console.log(error);
    }
  };

  const statCards = [
    { label: "Profile Completion", value: candidate.profileCompletion + "%", icon: <User size={22} />, color: "var(--primary)", bg: "rgba(26,107,60,0.08)", bar: true },
    { label: "Applications", value: candidate.totalApplications, icon: <Briefcase size={22} />, color: "#6366f1", bg: "rgba(99,102,241,0.08)" },
    { label: "Resume Status", value: candidate.resumeUploaded ? "Uploaded ✓" : "Not Uploaded", icon: <FileText size={22} />, color: candidate.resumeUploaded ? "var(--primary)" : "#f59e0b", bg: candidate.resumeUploaded ? "rgba(26,107,60,0.08)" : "rgba(245,158,11,0.08)" },
  ];

  const steps = [
    { label: "Personal Information", done: profileStatus.personal },
    { label: "Skills & Experience", done: profileStatus.skills },
    { label: "Resume Upload", done: profileStatus.resume },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--background)", padding: "0" }}>
      {/* Top banner */}
      <div style={{ background: "var(--primary-dark)", padding: "32px 32px 28px" }}>
        <div style={{ display: "inline-block", background: "rgba(200,241,53,0.15)", color: "var(--accent)", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, marginBottom: "10px", border: "1px solid rgba(200,241,53,0.25)" }}>Candidate Portal</div>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "32px", color: "white" }}>
          Welcome back, {candidate.firstName ? candidate.firstName.charAt(0).toUpperCase() + candidate.firstName.slice(1) : "..."} 👋
        </h1>
        <p style={{ color: "#6b9e7e", marginTop: "6px" }}>Manage your profile, applications and track your job search journey.</p>
      </div>

      <div style={{ padding: "28px 32px" }}>
        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          {statCards.map(({ label, value, icon, color, bg, bar }) => (
            <div key={label} className="card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "6px" }}>{label}</p>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "28px", color }}>{value}</div>
                </div>
                <div style={{ background: bg, borderRadius: "12px", width: "46px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", color }}>{icon}</div>
              </div>
              {bar && (
                <div style={{ height: "6px", background: "var(--surface-2)", borderRadius: "999px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${candidate.profileCompletion}%`, background: color, borderRadius: "999px", transition: "width 0.8s ease" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
          <Link href="/candidate/jobs/browse" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "var(--primary)", borderRadius: "14px", textDecoration: "none", color: "white" }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px" }}>Browse Jobs</span>
            <ChevronRight size={18} />
          </Link>
          <Link href="/candidate/account/profile" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "var(--surface)", borderRadius: "14px", textDecoration: "none", color: "var(--foreground)", border: "1px solid var(--border)" }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px" }}>Edit Profile</span>
            <ChevronRight size={18} color="var(--text-muted)" />
          </Link>
        </div>

        {/* Profile Completion Checklist */}
        <div className="card">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <TrendingUp size={20} color="var(--primary)" />
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "18px" }}>Complete Your Profile</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {steps.map(({ label, done }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "var(--surface-2)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: done ? "var(--primary)" : "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {done && <span style={{ color: "white", fontSize: "11px", fontWeight: 700 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: "14px", color: done ? "var(--foreground)" : "var(--text-muted)" }}>{label}</span>
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: done ? "var(--primary)" : "#f59e0b", background: done ? "rgba(26,107,60,0.08)" : "rgba(245,158,11,0.1)", padding: "3px 10px", borderRadius: "999px" }}>
                  {done ? "Completed" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
