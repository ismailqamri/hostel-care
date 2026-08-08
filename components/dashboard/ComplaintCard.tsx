"use client";

import {
  Complaint,
  deleteComplaint,
  updateComplaintStatus,
} from "@/services/complaintService";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ComplaintCardProps {
  complaint: Complaint;
}

export default function ComplaintCard({
  complaint,
}: ComplaintCardProps) {
  const statusColor: Record<
    "Open" | "In Progress" | "Resolved",
    string
  > = {
    Open: "bg-yellow-500 text-white",
    "In Progress": "bg-blue-500 text-white",
    Resolved: "bg-green-500 text-white",
  };

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this complaint?")) {
      return;
    }

    try {
      await deleteComplaint(complaint._id);
      alert("Complaint deleted successfully.");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to delete complaint.");
    }
  }

  async function handleStatusChange(
    value: "Open" | "In Progress" | "Resolved"
  ) {
    try {
      await updateComplaintStatus(complaint._id, value);
      alert("Status updated successfully.");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    }
  }

  return (
    <Card className="mt-4">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {complaint.category}
          </h3>

          <Badge className={statusColor[complaint.status]}>
            {complaint.status}
          </Badge>
        </div>

        <p className="text-sm text-slate-500">
          {complaint.studentName}
        </p>

        <p>
          Block <strong>{complaint.hostelBlock}</strong> • Room{" "}
          <strong>{complaint.roomNumber}</strong>
        </p>

        <p>{complaint.description}</p>

        <p className="text-xs text-slate-400">
          {new Date(complaint.createdAt).toLocaleDateString()}
        </p>

        <div className="flex items-center gap-3">
          <Select
            value={complaint.status}
            onValueChange={(value) =>
              handleStatusChange(
                value as "Open" | "In Progress" | "Resolved"
              )
            }
          >
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="In Progress">
                In Progress
              </SelectItem>
              <SelectItem value="Resolved">
                Resolved
              </SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="destructive"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}