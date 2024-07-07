/** @format */

"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Search } from "lucide-react";
import * as React from "react";
import { useLayoutEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import FormProduct from "./FormProduct";
import LimitSelect from "./LimitSelect";
import SelectFilter from "./SelectFilter";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  initialLimit?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  initialLimit = 10,
}: DataTableProps<TData, TValue>) {
  const [limit, setLimit] = React.useState(initialLimit);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [openFilter, setOpenFilter] = React.useState(false)

  const handleOpenFilter = () => {
    setOpenFilter(true)
  }

  const handleCloseFilter = () => {
    setOpenFilter(false)
  }


  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(data?.length / limit),
    state: { pagination: { pageIndex, pageSize: limit } },
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function" ? updater({ pageIndex, pageSize: limit }) : updater;
      setPageIndex(newState.pageIndex);
      setLimit(newState.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  
  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    table.setPageSize(newLimit);
  };
 if (isDesktop) {
  return (
    <div>
      <div className="flex gap-1 justify-between mb-5">
      <LimitSelect limit={limit} onChange={handleLimitChange} />
          <div className="relative flex items-center gap-2">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={20} />
            </button>
            
            {/* Button Filter */}
            <SelectFilter/>

            {/* Button Tambah Product */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Tambah Product</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle >Tambah Product</DialogTitle>
                </DialogHeader>
                <FormProduct />
                <DialogFooter>
                  <Button> Simpan </Button>
                </DialogFooter>
               </DialogContent>
            </Dialog>

          </div>
        </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Pagination>
          <PaginationContent>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
            {table.getPageCount() > 1 && (
              <>
                {table
                  .getPageOptions()
                  .map((page, index, array) =>
                    Math.abs(page - table.getState().pagination.pageIndex) <
                      2 || // Display 2 pages before and after the current page
                    index === 0 || // Display first page
                    index === array.length - 1 ? ( // Display last page
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={page === table.getState().pagination.pageIndex}
                          onClick={() => table.setPageIndex(page)}
                        >
                          {page + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ) : index === 1 || index === array.length - 2 ? ( // Display ellipsis
                      <PaginationItem key={page}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : null
                  )}
              </>
            )}
            <PaginationNext
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
} 
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false)

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const updateMatches = () => setMatches(mediaQuery.matches)

    // Initial check
    updateMatches()

    // Add listener for changes
    mediaQuery.addEventListener("change", updateMatches)

    // Clean up listener
    return () => {
      mediaQuery.removeEventListener("change", updateMatches)
    }
  }, [query])

  return matches
}

