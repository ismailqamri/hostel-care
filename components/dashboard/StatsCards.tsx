"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useComplaints } from "@/hooks/useComplaints";

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
      color: "text-slate-900",
    },
    {
      title: "Open",
      value: open,
      color: "text-yellow-600",
    },
    {
      title: "In Progress",
      value: inProgress,
      color: "text-blue-600",
    },
    {
      title: "Resolved",
      value: resolved,
      color: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">
              {stat.title}
            </p>

            <h2 className={`mt-3 text-4xl font-bold ${stat.color}`}>
              {loading ? "..." : stat.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}