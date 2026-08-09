"use client";

import StatsCards from "@/components/dashboard/StatsCards";
import ComplaintForm from "@/components/dashboard/ComplaintForm";
import ComplaintList from "@/components/dashboard/ComplaintList";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto max-w-screen-xl p-6 md:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Admin Portal
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            HostelCare
          </h1>

          <p className="mt-2 text-slate-500">
            Manage hostel complaints and monitor resolution progress.
          </p>
        </div>

        <StatsCards />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <section className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Submit Complaint
            </h2>

            <ComplaintForm />
          </section>

          <section className="lg:col-span-3">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              All Complaints
            </h2>

            <ComplaintList />
          </section>
        </div>
      </div>
    </main>
  );
}
