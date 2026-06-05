"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90">
      <div className="w-32 h-32 bg-white/95 rounded-lg shadow-lg flex items-center justify-center">
        <svg className="w-20 h-20" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" strokeWidth="3" strokeLinecap="round">
            <circle cx="25" cy="25" r="18" stroke="#F97316" strokeDasharray="85 113">
              <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
            </circle>

            <circle cx="25" cy="25" r="12" stroke="#06B6D4" strokeDasharray="60 140">
              <animateTransform attributeName="transform" type="rotate" from="360 25 25" to="0 25 25" dur="1.2s" repeatCount="indefinite" />
            </circle>

            <path d="M25 8 A17 17 0 0 1 42 25" stroke="#EF476F" strokeWidth="4">
              <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1.6s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
}