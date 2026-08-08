import { CalendarDays, House } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="border-b border-slate-200 pb-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
            <House className="size-6" />
          </div>

          <div>
            <h1 className="font-heading text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
              HostelCare
            </h1>

            <p className="mt-1 text-sm font-medium text-slate-500 sm:text-base">
              Manage hostel complaints efficiently
            </p>
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
          <CalendarDays className="size-4 text-blue-500" />
          <span>{today}</span>
        </div>
      </div>
    </header>
  );
}
