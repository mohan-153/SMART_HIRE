"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Search, MapPin, Briefcase, Target, DollarSign, ArrowRight, Zap } from "lucide-react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    try {
      const res = await axios.get("/api/jobs");
      setJobs(res.data.jobs);
      setFilteredJobs(res.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [search, jobs]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      {/* Header */}
      <div style={{ background: "var(--primary-dark)", padding: "60px 24px 80px" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(200,241,53,0.15)", color: "var(--accent)", padding: "5px 14px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, marginBottom: "16px", border: "1px solid rgba(200,241,53,0.3)" }}>
            <Zap size={12} /> Live Opportunities
          </div>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(36px,4vw,54px)", color: "white", marginBottom: "12px" }}>Find Your Dream Job</h1>
          <p style={{ color: "#6b9e7e", fontSize: "16px", marginBottom: "32px" }}>Explore opportunities from top companies.</p>
          <div style={{ maxWidth: "600px", position: "relative" }}>
            <Search size={18} style={{ position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)", color: "#6b9e7e" }} />
            <input type="text" placeholder="Search job titles..." value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", padding: "16px 16px 16px 50px", borderRadius: "14px", border: "1.5px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)", color: "white", fontFamily: "DM Sans, sans-serif", fontSize: "15px", outline: "none" }}
              onFocus={e => e.target.style.borderColor = "var(--accent)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
            />
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-7xl mx-auto px-6" style={{ marginTop: "-32px", paddingBottom: "60px" }}>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>
            {filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"} found
          </span>
        </div>

        {filteredJobs.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", background: "var(--surface)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "20px", marginBottom: "8px" }}>No jobs found</div>
            <p style={{ color: "var(--text-muted)" }}>Try adjusting your search terms.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
            {filteredJobs.map((job, i) => (
              <div key={job._id} className="card card-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s`, display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ background: "var(--surface-2)", borderRadius: "12px", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                    <Briefcase size={20} color="var(--primary)" />
                  </div>
                  <span style={{ background: "var(--surface-2)", color: "var(--primary)", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: 600, border: "1px solid var(--border)" }}>{job.jobType}</span>
                </div>

                <div>
                  <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "17px", marginBottom: "4px", color: "var(--foreground)" }}>{job.jobTitle}</h2>
                  <p style={{ color: "var(--primary)", fontWeight: 500, fontSize: "14px" }}>{job.companyName}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    [<MapPin size={13} key="m" />, job.location],
                    [<Target size={13} key="t" />, job.experienceLevel],
                    [<DollarSign size={13} key="d" />, job.salary],
                  ].map(([icon, val], idx) => val && (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "13px" }}>
                      <span style={{ color: "var(--primary)", flexShrink: 0 }}>{icon}</span>{val}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: "4px" }}>
                  <Link href={`/jobs/${job._id}`} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "10px", fontSize: "13px" }}>
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
