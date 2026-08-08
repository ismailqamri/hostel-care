"use client";

import { useMemo, useState } from "react";
import ComplaintCard from "./ComplaintCard";
import SearchBar from "./SearchBar";
import { useComplaints } from "@/hooks/useComplaints";

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
      <p className="mt-8 text-center">
        Loading complaints...
      </p>
    );
  }

  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredComplaints.length === 0 ? (
        <p className="mt-8 text-center text-slate-500">
          No complaints found.
        </p>
      ) : (
        <div className="grid gap-4">
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