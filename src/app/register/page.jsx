"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Zap, ArrowRight, User, Briefcase } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ firstName:"",lastName:"",email:"",password:"",confirmPassword:"",mobile:"",designation:"",companyName:"",companyWebsite:"",companyLocation:"",companyDescription:"",sector:"" });
  const [errors, setErrors] = useState({});

  const handleRoleChange = (newRole) => { setRole(newRole); setErrors({}); };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "⚠ Enter First Name";
    if (!form.lastName.trim()) newErrors.lastName = "⚠ Enter Last Name";
    if (!form.email.trim()) { newErrors.email = "⚠ Enter Valid Email"; }
    else if (!/\S+@\S+\.\S+/.test(form.email)) { newErrors.email = "⚠ Invalid Email Format"; }
    if (!form.password) { newErrors.password = "⚠ Enter Password"; }
    else if (form.password.length < 8) { newErrors.password = "⚠ Password must be at least 8 characters"; }
    if (!form.confirmPassword) { newErrors.confirmPassword = "⚠ Confirm your password"; }
    else if (form.password !== form.confirmPassword) { newErrors.confirmPassword = "⚠ Passwords do not match"; }
    if (role === "recruiter") {
      if (!form.mobile.trim()) { newErrors.mobile = "⚠ Enter Mobile Number"; }
      else if (!/^\d{10}$/.test(form.mobile.replace(/[-+ ]/g, ""))) { newErrors.mobile = "⚠ Enter a valid phone number"; }
      if (!form.designation.trim()) newErrors.designation = "⚠ Enter Designation";
      if (!form.companyName.trim()) newErrors.companyName = "⚠ Enter Company Name";
      if (!form.companyWebsite.trim()) { newErrors.companyWebsite = "⚠ Enter Company Website"; }
      else if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(form.companyWebsite)) { newErrors.companyWebsite = "⚠ Enter a valid URL"; }
      if (!form.companyLocation.trim()) newErrors.companyLocation = "⚠ Enter Company Location";
      if (!form.companyDescription.trim()) newErrors.companyDescription = "⚠ Enter Company Description";
      if (!form.sector.trim()) newErrors.sector = "⚠ Enter Industry Sector";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await axios.post("/api/auth/register", { ...form, role });
      toast.success(res.data.message);
      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  const inp = (extra={}) => ({
    width: "100%", padding: "12px 16px", borderRadius: "12px",
    border: "1.5px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)",
    color: "white", fontFamily: "DM Sans, sans-serif", fontSize: "14px", outline: "none",
    ...extra
  });

  const field = (key, placeholder, type="text", extraStyle={}) => (
    <div>
      <input type={type} placeholder={placeholder} style={inp(extraStyle)}
        onChange={e => setForm({ ...form, [key]: e.target.value })}
        onFocus={e => e.target.style.borderColor = "var(--accent)"}
        onBlur={e => e.target.style.borderColor = errors[key] ? "#f87171" : "rgba(255,255,255,0.1)"}
      />
      {errors[key] && <p style={{ color: "#f87171", fontSize: "12px", marginTop: "4px" }}>{errors[key]}</p>}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "var(--accent)", borderRadius: "50%", opacity: 0.05, pointerEvents: "none" }} />

      <div className="animate-fade-up" style={{ width: "100%", maxWidth: "700px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <div style={{ background: "var(--accent)", borderRadius: "12px", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Zap size={22} color="var(--primary-dark)" />
            </div>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "26px", color: "white" }}>SmartHire</span>
          </div>
        </div>

        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", padding: "40px", backdropFilter: "blur(20px)" }}>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "28px", color: "white", textAlign: "center", marginBottom: "6px" }}>Create Account</h1>
          <p style={{ color: "#6b9e7e", textAlign: "center", marginBottom: "28px", fontSize: "14px" }}>Join thousands of professionals on SmartHire</p>

          {/* Role Toggle */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "28px", background: "rgba(255,255,255,0.05)", padding: "6px", borderRadius: "14px" }}>
            {[["candidate","Candidate", <User size={16} key="u" />],["recruiter","Recruiter", <Briefcase size={16} key="b" />]].map(([r, label, icon]) => (
              <button key={r} type="button" onClick={() => handleRoleChange(r)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "11px", borderRadius: "10px", border: "none", cursor: "pointer", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px", transition: "all 0.2s",
                  background: role === r ? "var(--accent)" : "transparent",
                  color: role === r ? "var(--primary-dark)" : "#6b9e7e"
                }}>
                {icon} {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              {field("firstName", "First Name")}
              {field("lastName", "Last Name")}
            </div>
            {field("email", role === "candidate" ? "Email Address" : "Official Work Email", "email")}

            {role === "recruiter" && (
              <>
                {field("mobile", "Mobile Number")}
                {field("designation", "Designation")}
                {field("companyName", "Company Name")}
                {field("companyWebsite", "Company Website (e.g. example.com)")}
                {field("companyLocation", "Company Location")}
                <div>
                  <textarea placeholder="Company Description"
                    style={{ ...inp(), resize: "vertical", minHeight: "80px" }}
                    onChange={e => setForm({ ...form, companyDescription: e.target.value })}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = errors.companyDescription ? "#f87171" : "rgba(255,255,255,0.1)"}
                  />
                  {errors.companyDescription && <p style={{ color: "#f87171", fontSize: "12px", marginTop: "4px" }}>{errors.companyDescription}</p>}
                </div>
                {field("sector", "Industry Sector")}
              </>
            )}

            {/* Password */}
            <div>
              <div style={{ position: "relative" }}>
                <input type={showPassword ? "text" : "password"} placeholder="Password"
                  style={{ ...inp(), paddingRight: "48px" }}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = errors.password ? "#f87171" : "rgba(255,255,255,0.1)"}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#6b9e7e", cursor: "pointer", display: "flex" }}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p style={{ color: "#f87171", fontSize: "12px", marginTop: "4px" }}>{errors.password}</p>}
            </div>

            <div>
              <div style={{ position: "relative" }}>
                <input type={showConfirm ? "text" : "password"} placeholder="Confirm Password"
                  style={{ ...inp(), paddingRight: "48px" }}
                  onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
                  onFocus={e => e.target.style.borderColor = "var(--accent)"}
                  onBlur={e => e.target.style.borderColor = errors.confirmPassword ? "#f87171" : "rgba(255,255,255,0.1)"}
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                  style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#6b9e7e", cursor: "pointer", display: "flex" }}>
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <p style={{ color: "#f87171", fontSize: "12px", marginTop: "4px" }}>{errors.confirmPassword}</p>}
            </div>

            <button className="btn-accent" style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "15px", marginTop: "8px" }}>
              Create Account <ArrowRight size={16} />
            </button>

            <p style={{ textAlign: "center", color: "#6b9e7e", fontSize: "14px" }}>
              Already have an account?{" "}
              <span onClick={() => router.push("/login")} style={{ color: "var(--accent)", cursor: "pointer", fontWeight: 600 }}>Log In</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
