"use client";

import { useState } from "react";
import ComplaintForm from "@/components/dashboard/ComplaintForm";
import StudentComplaintCard from "@/components/student/StudentComplaintCard";
import SearchBar from "@/components/dashboard/SearchBar";
import { useComplaints } from "@/hooks/useComplaints";

export default function StudentPage() {
  const { complaints, loading } = useComplaints();
  const [studentName, setStudentName] = useState("");

  const myComplaints = complaints.filter(
    (complaint) =>
      studentName.trim() !== "" &&
      complaint.studentName.toLowerCase() ===
        studentName.trim().toLowerCase()
  );

  return (
    <main className="min-h-screen bg-[#f8f4ec] px-6 py-10 text-[#202638]">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e9a23b]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9780b]">
              Student Portal
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            HostelCare
          </h1>

          <p className="mt-2 text-lg text-[#73788a]">
            Log an issue and watch your complaint move from open to resolved.
          </p>
        </header>

        {/* Search */}
        <section className="mb-10 rounded-2xl border border-[#e5dccb] bg-[#fffdf8] p-6 shadow-[0_8px_25px_rgba(60,45,20,0.06)]">
          <label className="mb-3 block text-sm font-semibold text-[#202638]">
            Enter your name to view your complaints
          </label>

          <SearchBar
            search={studentName}
            setSearch={setStudentName}
          />
        </section>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Submit complaint */}
          <section>
            <div className="mb-4 flex items-center gap-4">
              <h2 className="text-2xl font-bold">
                Log a Repair Tag
              </h2>

              <div className="h-px flex-1 bg-[#dfd5c2]" />
            </div>

            <div className="rounded-2xl border border-[#e5dccb] bg-[#fffdf8] p-6 shadow-[0_8px_25px_rgba(60,45,20,0.06)]">
              <ComplaintForm />
            </div>
          </section>

          {/* My complaints */}
          <section>
            <div className="mb-4 flex items-center gap-4">
              <h2 className="text-2xl font-bold">
                My Tags
              </h2>

              <div className="h-px flex-1 bg-[#dfd5c2]" />
            </div>

            {loading ? (
              <div className="rounded-2xl border border-[#e5dccb] bg-[#fffdf8] p-10 text-center">
                <p className="text-[#73788a]">
                  Loading your complaints...
                </p>
              </div>
            ) : studentName.trim() === "" ? (
              <div className="rounded-2xl border border-dashed border-[#dfd5c2] bg-[#fffdf8] p-12 text-center">
                <p className="font-semibold">
                  Enter your name above
                </p>

                <p className="mt-2 text-sm text-[#73788a]">
                  Your submitted complaints will appear here.
                </p>
              </div>
            ) : myComplaints.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#dfd5c2] bg-[#fffdf8] p-12 text-center">
                <p className="font-semibold">
                  No complaints found
                </p>

                <p className="mt-2 text-sm text-[#73788a]">
                  We couldn't find complaints under this name.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {myComplaints.map((complaint) => (
                  <StudentComplaintCard
                    key={complaint._id}
                    complaint={complaint}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}