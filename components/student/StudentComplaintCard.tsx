import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Complaint } from "@/services/complaintService";

interface StudentComplaintCardProps {
  complaint: Complaint;
}

export default function StudentComplaintCard({
  complaint,
}: StudentComplaintCardProps) {
  const statusStyles = {
    Open: "bg-amber-50 text-amber-700 border-amber-200",
    "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
    Resolved: "bg-green-50 text-green-700 border-green-200",
  };

  return (
    <Card className="border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {complaint.category}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Submitted by {complaint.studentName}
            </p>
          </div>

          <Badge
            variant="outline"
            className={statusStyles[complaint.status]}
          >
            {complaint.status}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-600">
            Block {complaint.hostelBlock}
          </span>

          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-slate-600">
            Room {complaint.roomNumber}
          </span>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm leading-6 text-slate-700">
            {complaint.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-400">
            Submitted on{" "}
            {new Date(complaint.createdAt).toLocaleDateString()}
          </p>

          <span className="text-xs font-medium text-slate-500">
            {complaint.status === "Resolved"
              ? "Issue resolved"
              : complaint.status === "In Progress"
              ? "Work in progress"
              : "Awaiting action"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}