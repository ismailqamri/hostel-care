"use client";

import StatsCards from "@/components/dashboard/StatsCards";
import ComplaintForm from "@/components/dashboard/ComplaintForm";
import ComplaintList from "@/components/dashboard/ComplaintList";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] px-6 py-10 text-[#202638]">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e8a23d]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9780b]">
              Admin Portal
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            HostelCare
          </h1>

          <p className="mt-2 text-lg text-[#73788a]">
            Track every repair tag from open to resolved, block by block.
          </p>
        </header>

        {/* Statistics */}
        <div className="mb-10">
          <StatsCards />
        </div>

        {/* Complaint Form */}
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-4">
            <h2 className="text-2xl font-bold">
              Log a Repair Tag
            </h2>

            <div className="h-px flex-1 bg-[#dfd5c2]" />
          </div>

          <ComplaintForm />
        </section>

        {/* Ticket Board */}
        <section>
          <ComplaintList />
        </section>
      </div>
    </main>
  );
}