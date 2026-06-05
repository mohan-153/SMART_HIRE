"use client";

export default function InlineLoader({ size = 5 }) {
  const px = `${size}rem`;
  return (
    <div className="flex items-center gap-3 text-slate-600">
      <div
        className="rounded-full border-4 border-t-transparent animate-spin"
        style={{ width: px, height: px, borderColor: "#10B981", borderTopColor: "transparent" }}
        aria-hidden="true"
      />
      <span className="sr-only">Loading</span>
    </div>
  );
}
