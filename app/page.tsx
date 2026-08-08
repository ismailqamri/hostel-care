import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import ComplaintForm from "@/components/dashboard/ComplaintForm";
import ComplaintList from "@/components/dashboard/ComplaintList";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-screen-xl p-8">
        <Header />

        <StatsCards />

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">
              Submit Complaint
            </h2>

            <ComplaintForm />
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-2xl font-bold">
              Recent Complaints
            </h2>

            <ComplaintList />
          </div>
        </div>
      </div>
    </main>
  );
}