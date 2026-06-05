import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--primary-dark)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 0", marginTop: "auto" }}>
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
  );
}
