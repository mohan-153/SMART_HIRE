"use client";

import { useState, useEffect } from "react";

import CandidateSidebar from "@/components/CandidateSidebar";
import CandidateProfileCard from "@/components/CandidateProfileCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CandidateLayout({
  children,
}) {
  const [showProfile, setShowProfile] =
    useState(false);

  useEffect(() => {
    // if navigation requested to keep profile open, restore state
    try {
      const v = sessionStorage.getItem("keepProfileOpen");
      if (v === "1") {
        setShowProfile(true);
        sessionStorage.removeItem("keepProfileOpen");
      }
    } catch (e) {}
  }, []);

  return (
    <><Navbar />

      <div className="flex">
        <CandidateSidebar
          onProfileClick={() =>
            setShowProfile(true)
          }
        />

        <main className="flex-1">
          {children}
        </main>

      </div>

      <CandidateProfileCard
        open={showProfile}
        onClose={() =>
          setShowProfile(false)
        }
      />
      <Footer />
    </>
  );
}