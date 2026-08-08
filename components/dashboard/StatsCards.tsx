"use client";

import { Card, CardContent } from "@/components/ui/card";
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
      title: "Total Complaints",
      value: total,
      color: "text-slate-950",
      icon: ClipboardList,
      iconClassName: "bg-slate-100 text-slate-700",
    },
    {
      title: "Open",
      value: open,
      color: "text-amber-700",
      icon: TriangleAlert,
      iconClassName: "bg-amber-50 text-amber-600",
    },
    {
      title: "In Progress",
      value: inProgress,
      color: "text-blue-700",
      icon: Clock3,
      iconClassName: "bg-blue-50 text-blue-600",
    },
    {
      title: "Resolved",
      value: resolved,
      color: "text-emerald-700",
      icon: BadgeCheck,
      iconClassName: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {stat.title}
                </p>

                <div
                  className={`flex size-11 items-center justify-center rounded-2xl ${stat.iconClassName}`}
                >
                  <Icon className="size-5" />
                </div>
              </div>

              <h2
                className={`mt-5 text-4xl font-bold tracking-normal ${stat.color}`}
              >
                {loading ? "..." : stat.value}
              </h2>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
