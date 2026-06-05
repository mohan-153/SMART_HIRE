"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menu = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
    },

    {
      heading: "MANAGE USERS",
    },

    {
      title: "Candidates",
      path: "/admin/users/candidates",
    },

    {
      title: "Recruiters",
      path: "/admin/users/recruiters",
    },

    {
      heading: "MANAGE JOBS",
    },

    {
      title: "All Jobs",
      path: "/admin/jobs",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">

      <h1 className="text-3xl font-bold text-green-500 mb-10">
        SmartHire
      </h1>

      {menu.map((item, index) =>
        item.heading ? (
          <h3
            key={index}
            className="text-slate-400 text-sm font-semibold mt-8 mb-3"
          >
            {item.heading}
          </h3>
        ) : (
          <Link
            key={index}
            href={item.path}
            className={`block p-3 rounded-xl mb-2 transition ${
              pathname === item.path
                ? "bg-green-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            {item.title}
          </Link>
        )
      )}
    </aside>
  );
}