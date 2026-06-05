import Link from "next/link";
import Image from "next/image";
import { Briefcase, Users, Building2, Search, CheckCircle, ArrowRight, Zap, Shield, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--background)" }}>

      {/* Navbar */}
      <nav style={{ background: "rgba(248,247,244,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}
        className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: "72px" }}>
          <Link href="/" className="flex items-center gap-2">
            <div style={{ background: "var(--primary)", borderRadius: "10px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={18} color="#c8f135" />
            </div>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "22px", color: "var(--primary-dark)" }}>SmartHire</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/jobs" style={{ color: "var(--text-muted)", fontWeight: 500, fontSize: "14px", padding: "8px 16px", borderRadius: "10px", transition: "all 0.2s" }}
              className="hover:text-green-700 hover:bg-green-50">Browse Jobs</Link>
            <Link href="/login" className="btn-outline" style={{ padding: "9px 20px", fontSize: "14px" }}>Log In</Link>
            <Link href="/register" className="btn-primary" style={{ padding: "9px 20px", fontSize: "14px" }}>Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="animate-fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--accent)", color: "var(--primary-dark)", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, fontFamily: "Syne, sans-serif", marginBottom: "24px" }}>
              <Star size={13} fill="currentColor" /> #1 Recruitment Platform
            </div>
            <h1 className="animate-fade-up-1" style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(44px,5vw,68px)", lineHeight: 1.05, color: "var(--foreground)", marginBottom: "20px" }}>
              Find Your<br />
              <span style={{ color: "var(--primary)" }}>Dream Job</span><br />
              Faster Than Ever
            </h1>
            <p className="animate-fade-up-2" style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "460px" }}>
              SmartHire connects talented professionals with top companies through a modern, intelligent recruitment platform.
            </p>
            <div className="animate-fade-up-3 flex flex-wrap gap-3">
              <Link href="/jobs" className="btn-accent" style={{ padding: "14px 28px", fontSize: "15px" }}>
                Browse Jobs <ArrowRight size={16} />
              </Link>
              <Link href="/register" className="btn-outline" style={{ padding: "14px 28px", fontSize: "15px" }}>
                Post a Job
              </Link>
            </div>
            <div className="animate-fade-up-4" style={{ marginTop: "40px", display: "flex", gap: "32px" }}>
              {[["10K+","Jobs Posted"],["50K+","Candidates"],["500+","Companies"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "28px", color: "var(--primary)" }}>{num}</div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in relative">
            <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(circle at 60% 40%, rgba(200,241,53,0.25) 0%, transparent 70%)", borderRadius: "999px", zIndex: 0 }} />
            <Image src="/recruitment.png" alt="SmartHire Recruitment" width={700} height={600}
              className="w-full h-auto relative z-10" style={{ borderRadius: "24px" }} priority />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "var(--primary-dark)", padding: "20px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Briefcase size={28} color="#c8f135" />, num: "10K+", label: "Jobs Posted" },
              { icon: <Users size={28} color="#c8f135" />, num: "50K+", label: "Candidates" },
              { icon: <Building2 size={28} color="#c8f135" />, num: "500+", label: "Companies" },
              { icon: <CheckCircle size={28} color="#c8f135" />, num: "15K+", label: "Successful Hires" },
            ].map(({ icon, num, label }) => (
              <div key={label} className="flex items-center gap-4">
                {icon}
                <div>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "22px", color: "white" }}>{num}</div>
                  <div style={{ fontSize: "13px", color: "#8fbb9e" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "96px 0", background: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div style={{ display: "inline-block", background: "var(--surface-2)", color: "var(--primary)", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, marginBottom: "16px", border: "1px solid var(--border)" }}>How It Works</div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "42px", color: "var(--foreground)" }}>Three Steps to Your Next Role</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Search size={32} color="var(--primary)" />, num: "01", title: "Search Jobs", desc: "Explore thousands of opportunities from top companies worldwide." },
              { icon: <Users size={32} color="var(--primary)" />, num: "02", title: "Apply Easily", desc: "Submit polished applications in just a few clicks." },
              { icon: <CheckCircle size={32} color="var(--primary)" />, num: "03", title: "Get Hired", desc: "Connect directly with top recruiters and land your dream role." },
            ].map(({ icon, num, title, desc }) => (
              <div key={num} className="card card-lift" style={{ position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "16px", right: "20px", fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "48px", color: "var(--surface-2)", lineHeight: 1 }}>{num}</div>
                <div style={{ background: "var(--surface-2)", borderRadius: "14px", width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>{icon}</div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "20px", marginBottom: "10px" }}>{title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "15px" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SmartHire */}
      <section style={{ padding: "80px 0", background: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ display: "inline-block", background: "var(--accent)", color: "var(--primary-dark)", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, marginBottom: "20px" }}>Why SmartHire?</div>
              <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: 1.15, marginBottom: "32px" }}>Built for the Modern Hiring Experience</h2>
              {[
                { icon: <Zap size={20} color="var(--primary)" />, title: "Smart Matching", desc: "Our platform intelligently connects the right candidates with the right opportunities." },
                { icon: <Shield size={20} color="var(--primary)" />, title: "Verified Companies", desc: "Every company on SmartHire is verified for a safe and trusted hiring environment." },
                { icon: <Star size={20} color="var(--primary)" />, title: "Real-time Updates", desc: "Track your application status in real-time from submission to offer." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4" style={{ marginBottom: "24px" }}>
                  <div style={{ background: "var(--surface-2)", borderRadius: "12px", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid var(--border)" }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, marginBottom: "4px" }}>{title}</div>
                    <div style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { color: "var(--primary)", label: "Placement Rate", value: "94%" },
                { color: "#6366f1", label: "Avg. Time to Hire", value: "12 Days" },
                { color: "#f59e0b", label: "Active Recruiters", value: "2,400+" },
                { color: "#ec4899", label: "New Jobs Daily", value: "340+" },
              ].map(({ color, label, value }) => (
                <div key={label} className="card" style={{ textAlign: "center", borderTop: `4px solid ${color}` }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "36px", color }}>{value}</div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px" }}>
        <div className="max-w-4xl mx-auto text-center" style={{ background: "var(--primary-dark)", borderRadius: "32px", padding: "64px 48px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", background: "var(--accent)", borderRadius: "50%", opacity: 0.12 }} />
          <div style={{ position: "absolute", bottom: "-60px", left: "-20px", width: "160px", height: "160px", background: "var(--primary-light)", borderRadius: "50%", opacity: 0.2 }} />
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "44px", color: "white", lineHeight: 1.1, marginBottom: "16px", position: "relative", zIndex: 1 }}>
            Ready to Start Your<br />Career Journey?
          </h2>
          <p style={{ color: "#8fbb9e", fontSize: "17px", marginBottom: "36px", position: "relative", zIndex: 1 }}>
            Join SmartHire today and unlock thousands of career opportunities.
          </p>
          <Link href="/register" className="btn-accent" style={{ padding: "16px 36px", fontSize: "16px", position: "relative", zIndex: 1 }}>
            Create Free Account <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--primary-dark)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 0" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div style={{ background: "var(--accent)", borderRadius: "8px", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={15} color="var(--primary-dark)" />
            </div>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "20px", color: "white" }}>SmartHire</span>
          </div>
          <p style={{ color: "#4d7a5e", fontSize: "14px" }}>© 2026 SmartHire. All Rights Reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map(t => (
              <span key={t} style={{ color: "#4d7a5e", fontSize: "14px", cursor: "pointer" }}>{t}</span>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
