"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Briefcase, Users, CheckCircle, Clock, ArrowRight, ChevronRight } from "lucide-react";
import InlineLoader from "@/components/InlineLoader";
import Link from "next/link";

export default function RecruiterDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const router = useRouter();

  useEffect(() => { fetchDashboard(); }, []);
  useEffect(() => { checkRole(); }, []);

  const checkRole = async () => {
    const res = await axios.get("/api/auth/me");
    if (res.data.role !== "recruiter") router.push("/candidate/dashboard");
  };

  const fetchDashboard = async () => {
    try {
      const res = await axios.get("/api/recruiter/dashboard");
      setStats(res.data.stats);
      setApplicants(res.data.recentApplicants);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}><InlineLoader /></div>;

  const cards = [
    { title: "Posted Jobs", value: stats?.postedJobs || 0, icon: <Briefcase size={22} />, color: "var(--primary)", bg: "rgba(26,107,60,0.08)" },
    { title: "Total Applicants", value: stats?.totalApplicants || 0, icon: <Users size={22} />, color: "#6366f1", bg: "rgba(99,102,241,0.08)" },
    { title: "Shortlisted", value: stats?.shortlisted || 0, icon: <CheckCircle size={22} />, color: "#10b981", bg: "rgba(16,185,129,0.08)" },
    { title: "Pending Review", value: stats?.pendingReview || 0, icon: <Clock size={22} />, color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  ];

  const statusStyle = (status) => {
    const s = status?.toLowerCase();
    if (s === "shortlisted") return "badge-shortlisted";
    if (s === "rejected") return "badge-rejected";
    if (s === "applied" || s === "pending") return "badge-applied";
    return "badge-pending";
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--background)" }}>
      {/* Header */}
      <div style={{ background: "var(--primary-dark)", padding: "32px 32px 28px" }}>
        <div style={{ display: "inline-block", background: "rgba(200,241,53,0.15)", color: "var(--accent)", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, marginBottom: "10px", border: "1px solid rgba(200,241,53,0.25)" }}>Recruiter Portal</div>
        <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "32px", color: "white" }}>Recruiter Dashboard</h1>
        <p style={{ color: "#6b9e7e", marginTop: "6px" }}>Manage your jobs and track applicants in one place.</p>
      </div>

      <div style={{ padding: "28px 32px" }}>
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "24px" }}>
          {cards.map(({ title, value, icon, color, bg }) => (
            <div key={title} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", marginBottom: "6px" }}>{title}</p>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "32px", color }}>{value}</div>
              </div>
              <div style={{ background: bg, borderRadius: "12px", width: "46px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", color }}>{icon}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
          <Link href="/recruiter/jobs/post" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "var(--primary)", borderRadius: "14px", textDecoration: "none", color: "white" }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px" }}>Post a New Job</span>
            <ArrowRight size={18} />
          </Link>
          <Link href="/recruiter/applicants/all" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "var(--surface)", borderRadius: "14px", textDecoration: "none", color: "var(--foreground)", border: "1px solid var(--border)" }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px" }}>View All Applicants</span>
            <ChevronRight size={18} color="var(--text-muted)" />
          </Link>
        </div>

        {/* Recent Applicants */}
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "18px" }}>Recent Applicants</h2>
            <Link href="/recruiter/applicants/all" style={{ fontSize: "13px", color: "var(--primary)", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
              View All <ArrowRight size={13} />
            </Link>
          </div>

          {applicants.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 20px", color: "var(--text-muted)" }}>
              <Users size={40} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
              <p style={{ fontWeight: 500 }}>No applicants yet</p>
              <p style={{ fontSize: "13px", marginTop: "4px" }}>Post a job to start receiving applications.</p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {["Candidate", "Job Role", "Status"].map(h => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: "12px", fontWeight: 700, color: "var(--text-muted)", fontFamily: "Syne, sans-serif", letterSpacing: "0.5px", textTransform: "uppercase" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((a) => (
                    <tr key={a._id} style={{ borderBottom: "1px solid var(--border)" }}
                      onMouseEnter={e => e.currentTarget.style.background = "var(--surface-2)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      <td style={{ padding: "14px 12px", fontSize: "14px", fontWeight: 500 }}>
                        {a?.candidateId?.firstName} {a?.candidateId?.lastName}
                      </td>
                      <td style={{ padding: "14px 12px", fontSize: "14px", color: "var(--text-muted)" }}>{a?.jobId?.jobTitle}</td>
                      <td style={{ padding: "14px 12px" }}>
                        <span className={statusStyle(a.status)} style={{ textTransform: "capitalize" }}>{a.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
