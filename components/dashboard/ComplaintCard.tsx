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
import {
  CalendarDays,
  MapPinned,
  Trash2,
  UserCircle2,
} from "lucide-react";

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
    Open: "border-amber-200 bg-amber-50 text-amber-700",
    "In Progress": "border-blue-200 bg-blue-50 text-blue-700",
    Resolved: "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  const studentInitial =
    complaint.studentName.trim().charAt(0).toUpperCase() || "S";

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
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-normal text-slate-950">
              {complaint.category}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <CalendarDays className="size-3.5" />
              {new Date(complaint.createdAt).toLocaleDateString()}
            </p>
          </div>

          <Badge
            className={`${statusColor[complaint.status]} h-7 rounded-full border px-3 text-xs font-semibold shadow-none`}
          >
            {complaint.status}
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold text-slate-700">
            {studentInitial}
          </div>
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 truncate text-sm font-semibold text-slate-900">
              <UserCircle2 className="size-4 text-slate-400" />
              {complaint.studentName}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                <MapPinned className="size-3.5 text-blue-500" />
                Block {complaint.hostelBlock}
              </span>
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                Room {complaint.roomNumber}
              </span>
            </div>
          </div>
        </div>

        <p className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 text-sm leading-6 text-slate-600">
          {complaint.description}
        </p>

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Select
            value={complaint.status}
            onValueChange={(value) =>
              handleStatusChange(
                value as "Open" | "In Progress" | "Resolved"
              )
            }
          >
            <SelectTrigger className="h-10 w-full rounded-xl border-slate-200 bg-white px-3 shadow-sm transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-blue-100 sm:w-44">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="rounded-xl border border-slate-200 bg-white shadow-lg">
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
            className="h-10 rounded-xl border border-red-200 bg-white px-4 font-semibold text-red-600 shadow-sm transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700 active:scale-[0.99]"
            onClick={handleDelete}
          >
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
