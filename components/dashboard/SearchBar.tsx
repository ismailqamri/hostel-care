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
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-[#6b6e7c]" />

      <Input
        placeholder="Search by student, room or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          h-11
          rounded-xl
          border-[#e1d8c3]
          bg-[#faf7ef]
          pl-11
          pr-4
          text-sm
          text-[#1e2333]
          shadow-none
          transition-all
          duration-200
          placeholder:text-[#aaa6bd]
          focus-visible:border-[#e8a23d]
          focus-visible:ring-4
          focus-visible:ring-[#e8a23d]/15
        "
      />
    </div>
  );
}