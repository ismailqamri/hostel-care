"use client";

import { useMemo, useState } from "react";
import ComplaintCard from "./ComplaintCard";
import { useComplaints } from "@/hooks/useComplaints";
import { Inbox, LoaderCircle, Search } from "lucide-react";

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
      <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-[#e1d8c3] bg-[#fffdf8]">
        <div className="flex items-center gap-3 text-[#6b6e7c]">
          <LoaderCircle className="h-5 w-5 animate-spin" />
          Loading complaints...
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Ticket Board heading */}
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-[#1e2333]">
          Ticket Board
        </h2>

        <span className="font-mono text-lg text-[#6b6e7c]">
          {filteredComplaints.length}{" "}
          {filteredComplaints.length === 1 ? "tag" : "tags"}
        </span>

        <div className="h-px flex-1 bg-[#e1d8c3]" />
      </div>

      {/* Search */}
      <div className="relative mt-6">
        <Search className="absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-[#6b6e7c]" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by student, room or category..."
          className="h-[82px] w-full rounded-2xl border-2 border-[#e1d8c3] bg-[#faf7ef] pl-[78px] pr-6 text-2xl text-[#1e2333] outline-none transition placeholder:text-[#aaa5bd] focus:border-[#e8a23d] focus:ring-4 focus:ring-[#e8a23d]/10"
        />
      </div>

      {/* Complaints */}
      <div className="mt-5 space-y-5">
        {filteredComplaints.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#e1d8c3] bg-[#fffdf8] p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ecdc] text-[#6b6e7c]">
              <Inbox className="h-7 w-7" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#1e2333]">
              No complaints yet
            </h3>

            <p className="mt-2 text-sm text-[#6b6e7c]">
              Submit your first complaint to get started.
            </p>
          </div>
        ) : (
          filteredComplaints.map((complaint) => (
            <ComplaintCard
              key={complaint._id}
              complaint={complaint}
            />
          ))
        )}
      </div>
    </div>
  );
}