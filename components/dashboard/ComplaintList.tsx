"use client";

import { useMemo, useState } from "react";
import ComplaintCard from "./ComplaintCard";
import SearchBar from "./SearchBar";
import { useComplaints } from "@/hooks/useComplaints";
import { Inbox, LoaderCircle } from "lucide-react";

export default function ComplaintList() {
  const { complaints, loading } = useComplaints();
  const [search, setSearch] = useState("");

  const filteredComplaints = useMemo(() => {
    const query = search.toLowerCase();

    return complaints.filter((complaint) => {
      return (
        complaint.studentName.toLowerCase().includes(query) ||
        complaint.roomNumber.toLowerCase().includes(query) ||
        complaint.category.toLowerCase().includes(query)
      );
    });
  }, [complaints, search]);

  if (loading) {
    return (
      <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 text-sm font-medium text-slate-500 shadow-sm">
        <LoaderCircle className="size-5 animate-spin text-blue-500" />
        <span>Loading complaints...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredComplaints.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/80 p-10 text-center shadow-sm">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
            <Inbox className="size-7" />
          </div>
          <h3 className="mt-4 font-heading text-2xl font-semibold tracking-normal text-slate-950">
            No complaints yet
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Submit your first complaint to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredComplaints.map((complaint) => (
            <ComplaintCard
              key={complaint._id}
              complaint={complaint}
            />
          ))}
        </div>
      )}
    </div>
  );
}
