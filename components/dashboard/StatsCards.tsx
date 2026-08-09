"use client";

import { useComplaints } from "@/hooks/useComplaints";
import {
  BadgeCheck,
  ClipboardList,
  Clock3,
  TriangleAlert,
} from "lucide-react";

export default function StatsCards() {
  const { complaints, loading } = useComplaints();

  const total = complaints.length;
  const open = complaints.filter((c) => c.status === "Open").length;
  const inProgress = complaints.filter(
    (c) => c.status === "In Progress"
  ).length;
  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
      icon: ClipboardList,
      accent: "bg-[#1e2333]",
    },
    {
      title: "Open",
      value: open,
      icon: TriangleAlert,
      accent: "bg-[#d14c2d]",
    },
    {
      title: "In Progress",
      value: inProgress,
      icon: Clock3,
      accent: "bg-[#52658f]",
    },
    {
      title: "Resolved",
      value: resolved,
      icon: BadgeCheck,
      accent: "bg-[#4f8668]",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="relative overflow-hidden rounded-2xl border border-[#e1d8c3] bg-[#fffdf8] p-5 shadow-[0_6px_20px_-14px_rgba(30,35,51,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Top accent line */}
            <div
              className={`absolute left-0 right-0 top-0 h-1 ${stat.accent}`}
            />

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6b6e7c]">
                  {stat.title}
                </p>

                <p className="mt-2 text-3xl font-bold tracking-tight text-[#1e2333]">
                  {loading ? "..." : stat.value}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3ecdc] text-[#6b6e7c]">
                <Icon className="h-4 w-4" />
              </div>
            </div>

            {/* Bottom dashed detail */}
            <div className="mt-4 border-t border-dashed border-[#e1d8c3] pt-3">
              <p className="text-xs text-[#8a8792]">
                {stat.title === "Total" && "All submitted tags"}
                {stat.title === "Open" && "Awaiting action"}
                {stat.title === "In Progress" && "Currently being handled"}
                {stat.title === "Resolved" && "Successfully completed"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}