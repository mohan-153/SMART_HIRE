"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-9999 bg-white/70 backdrop-blur-sm flex items-center justify-center">

      <div className="relative w-20 h-20">

        <div className="
          absolute
          w-20
          h-20
          border-4
          border-green-500
          border-t-transparent
          rounded-full
          animate-spin
        "></div>

        <div className="
          absolute
          inset-3
          border-4
          border-blue-500
          border-r-transparent
          rounded-full
          animate-spin
        "></div>

        <div className="
          absolute
          inset-6
          border-4
          border-pink-500
          border-l-transparent
          rounded-full
          animate-spin
        "></div>

      </div>

    </div>
  );
}