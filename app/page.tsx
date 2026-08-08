export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-8">
        <h1 className="text-4xl font-bold text-slate-900">
          HostelCare
        </h1>

        <p className="mt-2 text-slate-600">
          Smart Hostel Complaint Management System
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">Total Complaints</h2>
            <p className="mt-3 text-4xl font-bold">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">Open</h2>
            <p className="mt-3 text-4xl font-bold text-yellow-600">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">In Progress</h2>
            <p className="mt-3 text-4xl font-bold text-blue-600">0</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">Resolved</h2>
            <p className="mt-3 text-4xl font-bold text-green-600">0</p>
          </div>
        </div>
      </div>
    </main>
  );
}