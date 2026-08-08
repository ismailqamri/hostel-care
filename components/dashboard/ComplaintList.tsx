"use client";

import ComplaintCard from "./ComplaintCard";
import { useComplaints } from "@/hooks/useComplaints";

export default function ComplaintList() {
  const { complaints, loading } = useComplaints();

  if (loading) {
    return (
      <p className="mt-8 text-center">
        Loading complaints...
      </p>
    );
  }

  if (complaints.length === 0) {
    return (
      <p className="mt-8 text-center text-slate-500">
        No complaints found.
      </p>
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {complaints.map((complaint) => (
        <ComplaintCard
          key={complaint._id}
          complaint={complaint}
        />
      ))}
    </div>
  );
}