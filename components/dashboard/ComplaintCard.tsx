"use client";

import {
  Complaint,
  deleteComplaint,
  updateComplaintStatus,
} from "@/services/complaintService";

import {
  CalendarDays,
  Trash2,
} from "lucide-react";

interface ComplaintCardProps {
  complaint: Complaint;
}

export default function ComplaintCard({
  complaint,
}: ComplaintCardProps) {
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

  const statusStyles = {
    Open: "border-[#d14c2d] text-[#c94b2d]",
    "In Progress": "border-[#52658f] text-[#52658f]",
    Resolved: "border-[#4f8668] text-[#4f8668]",
  };

  return (
    <div className="relative rounded-2xl border border-[#e1d8c3] bg-[#fffdf9] shadow-sm">
      {/* Timeline marker */}
      <div className="absolute left-[-17px] top-[54px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e1d8c3] bg-[#faf7ef]">
        <div className="h-2.5 w-2.5 rounded-full bg-[#e8a23d]" />
      </div>

      <div className="relative p-6 pl-[60px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#1e2333]">
              {complaint.category}
            </h3>

            <div className="mt-1.5 flex items-center gap-2 text-sm text-[#6b6e7c]">
              <CalendarDays className="h-4 w-4" />

              {new Date(complaint.createdAt).toLocaleDateString()}
            </div>
          </div>

          {/* Status stamp */}
          <span
            className={`rounded-[9px] border-2 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${statusStyles[complaint.status]}`}
          >
            {complaint.status}
          </span>
        </div>

        {/* Student information */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8a23d] text-base font-bold text-white">
            {studentInitial}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-semibold text-[#1e2333]">
              {complaint.studentName}
            </span>

            <span className="rounded-full border border-[#e1d8c3] bg-[#f3ecdc] px-3 py-1 text-sm font-medium text-[#6b6e7c]">
              Block {complaint.hostelBlock}
            </span>

            <span className="rounded-full border border-[#e1d8c3] bg-[#f3ecdc] px-3 py-1 text-sm font-medium text-[#6b6e7c]">
              Room {complaint.roomNumber}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-5 rounded-xl border border-[#e1d8c3] bg-[#faf7ef] px-5 py-3.5">
          <p className="text-sm leading-6 text-[#1e2333]">
            {complaint.description}
          </p>
        </div>

        {/* Bottom actions */}
        <div className="mt-5 flex items-center justify-between gap-4">
          {/* Status dropdown */}
          <select
            value={complaint.status}
            onChange={(e) =>
              handleStatusChange(
                e.target.value as
                  | "Open"
                  | "In Progress"
                  | "Resolved"
              )
            }
            className="h-11 w-[180px] appearance-none rounded-xl border-2 border-[#e1d8c3] bg-[#faf7ef] px-4 text-base text-[#1e2333] outline-none transition focus:border-[#e8a23d] focus:ring-4 focus:ring-[#e8a23d]/20"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>

          {/* Delete */}
          <button
            onClick={handleDelete}
            className="flex h-11 items-center gap-2 rounded-xl border-2 border-[#d14c2d] bg-transparent px-5 text-sm font-semibold text-[#c94b2d] transition hover:bg-[#d14c2d]/5 active:scale-[0.98]"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}