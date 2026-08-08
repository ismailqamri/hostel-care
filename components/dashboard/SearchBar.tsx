"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
      <Input
        placeholder="Search by student, room or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-12 rounded-2xl border-slate-200 bg-white pl-12 pr-4 text-sm shadow-sm transition-all duration-200 placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:ring-blue-100"
      />
    </div>
  );
}
