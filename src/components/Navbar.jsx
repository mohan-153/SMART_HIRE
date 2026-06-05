"use client";

import Link from "next/link";
import axios from "axios";
import { User, Zap, LogOut, Settings } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useLoading } from "../context/LoadingProvider";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const { setLoading } = useLoading();

  useEffect(() => { getUser(); }, []);

  const getUser = async () => {
    try {
      const res = await axios.get("/api/auth/me");
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      sessionStorage.clear();
      toast.success("Logged Out Successfully");
      if (typeof setLoading === "function") setLoading(true);
      router.push("/login");
      router.refresh();
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  const initials = user?.firstName
    ? user.firstName.charAt(0).toUpperCase() + (user.lastName?.charAt(0).toUpperCase() || "")
    : user?.email?.charAt(0).toUpperCase() || "U";

  return (
    <nav style={{ background: "rgba(248,247,244,0.95)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, zIndex: 50 }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "64px" }}>
        <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <div style={{ background: "var(--primary)", borderRadius: "10px", width: "34px", height: "34px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={16} color="#c8f135" />
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "20px", color: "var(--primary-dark)" }}>SmartHire</span>
        </Link>

        <div className="flex items-center gap-3" ref={dropdownRef}>
          <div style={{ position: "relative" }}>
            <button onClick={() => setOpen((prev) => !prev)}
              style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "14px", transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--primary-light)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--primary)"}>
              {initials}
            </button>

            {open && (
              <div className="animate-fade-in" style={{ position: "absolute", right: 0, top: "calc(100% + 10px)", width: "260px", background: "var(--surface)", borderRadius: "16px", border: "1px solid var(--border)", boxShadow: "0 16px 48px rgba(0,0,0,0.12)", overflow: "hidden" }}>
                <div style={{ padding: "16px", borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                  <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "15px" }}>
                    {user?.firstName
                      ? `${user.firstName.charAt(0).toUpperCase()}${user.firstName.slice(1)} ${user.lastName || ""}`
                      : user?.email?.split("@")[0] || "User"}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "2px" }}>{user?.email}</div>
                  <div style={{ marginTop: "6px", display: "inline-block", background: "var(--accent)", color: "var(--primary-dark)", padding: "2px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 700, fontFamily: "Syne, sans-serif", textTransform: "capitalize" }}>{user?.role}</div>
                </div>

                <Link href={user?.role === "recruiter" ? "/recruiter/profile" : "/candidate/account/profile"}
                  onClick={() => setOpen(false)}
                  style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", color: "var(--foreground)", textDecoration: "none", fontSize: "14px", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--surface-2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <Settings size={15} color="var(--text-muted)" /> Edit Profile
                </Link>

                <button onClick={handleLogout}
                  style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", padding: "12px 16px", color: "#dc2626", background: "transparent", border: "none", cursor: "pointer", fontSize: "14px", textAlign: "left", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fef2f2"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <LogOut size={15} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
