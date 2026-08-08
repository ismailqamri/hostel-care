import { Card, CardContent } from "@/components/ui/card";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Complaints",
      value: 0,
      color: "text-slate-900",
    },
    {
      title: "Open",
      value: 0,
      color: "text-yellow-600",
    },
    {
      title: "In Progress",
      value: 0,
      color: "text-blue-600",
    },
    {
      title: "Resolved",
      value: 0,
      color: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardContent className="p-6">
            <p className="text-sm text-slate-500">{stat.title}</p>

            <h2 className={`mt-3 text-4xl font-bold ${stat.color}`}>
              {stat.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}