import Header from "@/components/dashboard/Header";
import StatsCards from "@/components/dashboard/StatsCards";
import ComplaintForm from "@/components/dashboard/ComplaintForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-8">
        <Header />
        <StatsCards />
        <ComplaintForm />
      </div>
    </main>
  );
}