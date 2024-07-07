"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterIcon } from "lucide-react"; // Replace with the actual import path for the icon you're using

export default function SelectFilter() {
  return (
    <Select>
      <SelectTrigger className="p-2 w-10 h-10">
        <FilterIcon className="h-10 w-10" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="terbaru">
          <div className="flex items-center gap-3">
            Terbaru
          </div>
        </SelectItem>
        <SelectItem value="popular">
          <div className="flex items-center gap-3">
            Terlama
          </div>
        </SelectItem>
        <SelectItem value="trending">
          <div className="flex items-center gap-3">
            Trending
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
