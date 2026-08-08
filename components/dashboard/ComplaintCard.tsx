"use client";

import {
  Complaint,
  deleteComplaint,
  updateComplaintStatus,
} from "@/services/complaintService";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ComplaintCardProps {
  complaint: Complaint;
}

export default function ComplaintCard({
  complaint,
}: ComplaintCardProps) {
  const statusColor = {
    Open: "bg-yellow-500",
    "In Progress": "bg-blue-500",
    Resolved: "bg-green-500",
  };

  async function handleDelete() {
    if (!confirm("Delete this complaint?")) return;

    try {
      await deleteComplaint(complaint._id);
      alert("Complaint deleted.");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to delete complaint.");
    }
  }

  async function handleStatusChange() {
    const nextStatus =
      complaint.status === "Open"
        ? "In Progress"
        : complaint.status === "In Progress"
        ? "Resolved"
        : "Open";

    try {
      await updateComplaintStatus(
        complaint._id,
        nextStatus
      );

      alert("Status updated.");

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    }
  }

  return (
    <Card>
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
          Block {complaint.hostelBlock} • Room {complaint.roomNumber}
        </p>

        <p>{complaint.description}</p>

        <p className="text-xs text-slate-400">
          {new Date(
            complaint.createdAt
          ).toLocaleDateString()}
        </p>

        <div className="flex gap-2">
          <Button onClick={handleStatusChange}>
            Change Status
          </Button>

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