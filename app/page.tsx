import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import ComplaintForm from "@/components/dashboard/ComplaintForm";
import ComplaintList from "@/components/dashboard/ComplaintList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-950">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Header />

        <StatsCards />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <section className="space-y-4 lg:col-span-2">
            <h2 className="font-heading text-2xl font-semibold tracking-normal text-slate-950">
              Submit Complaint
            </h2>

            <ComplaintForm />
          </section>

          <section className="space-y-4 lg:col-span-3">
            <h2 className="font-heading text-2xl font-semibold tracking-normal text-slate-950">
              Recent Complaints
            </h2>

            <ComplaintList />
          </section>
        </div>
      </div>
    </main>
  );
}
