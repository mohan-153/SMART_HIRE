"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, ChevronRight, LogOut } from "lucide-react";

export default function CandidateProfileCard({
  open,
  onClose,
}) {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (open) {
      loadUser();
    }
  }, [open]);

  const loadUser = async () => {
    try {
      const res = await axios.get(
        "/api/auth/me"
      );

      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Card */}
      <div className="fixed left-24 bottom-20 w-87.5 bg-white rounded-3xl shadow-2xl z-50 p-6">

        {/* Top Section */}
        <div className="flex justify-between items-start">

          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold">
            {user?.firstName?.charAt(0)?.toLowerCase()}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <button
              onClick={(e) => {
                e.stopPropagation();
                try {
                  if (typeof onClose === "function") onClose();
                } catch (err) {}
                router.push("/candidate/account/profile");
              }}
              className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-3 rounded-full flex items-center gap-2"
            >
              <Pencil size={16} />
              Edit Profile
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                try {
                  if (typeof onClose === "function") onClose();
                } catch (err) {}
                router.push("/candidate/account/profile/view");
              }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-900 text-white"
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

        {/* User Info */}
        <div className="mt-4">

          <h2 className="text-4xl font-bold uppercase">
            {user?.firstName}{" "}
            {user?.lastName}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.email}
          </p>

        </div>

        

        {/* Logout */}
        <button
          className="mt-6 flex items-center gap-2 text-red-500 hover:text-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </>
  );
}