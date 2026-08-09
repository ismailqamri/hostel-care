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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto max-w-6xl p-6 md:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Student Portal
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            HostelCare
          </h1>

          <p className="mt-2 text-slate-500">
            Submit a complaint and track its resolution status.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Enter your name to view your complaints
          </label>

          <SearchBar
            search={studentName}
            setSearch={setStudentName}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Submit a Complaint
            </h2>

            <ComplaintForm />
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              My Complaints
            </h2>

            {loading ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <p className="text-slate-500">
                  Loading your complaints...
                </p>
              </div>
            ) : studentName.trim() === "" ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="font-medium text-slate-700">
                  Enter your name above
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Your submitted complaints will appear here.
                </p>
              </div>
            ) : myComplaints.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                <p className="font-medium text-slate-700">
                  No complaints found
                </p>

                <p className="mt-1 text-sm text-slate-500">
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