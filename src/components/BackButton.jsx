"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLoading } from "../context/LoadingProvider";

export default function BackButton() {
  const router = useRouter();
  const { setLoading } = useLoading();

  return (
    <button
      type="button"
      onClick={() => {
        if (typeof setLoading === "function") setLoading(true);
        router.back();
      }}
      className="flex items-center gap-2 mb-6 px-4 py-2 bg-white border rounded-xl shadow-sm hover:bg-gray-50 transition"
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
}