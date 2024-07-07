/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "../../components/Page.title";
import { getSales } from "@/my-api/myApi";
import { useQuery } from "@tanstack/react-query";
import { PresetActions } from "@/components/presetAction";
import { useRouter } from "next/navigation";

type Props = {};
type Payment = {
  transaction_date: number;
  invoice_id: string;
  customer_name: string;
  total_price: number;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "transaction_date",
    header: "Date"
  },
  {
    accessorKey: "invoice_id",
    header: "Invoice"
  },
  {
    accessorKey: "customer_name",
    header: "Costomer"
  },
  {
    accessorKey: "total_price",
    header: "Total"
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <PresetActions />,
  },
];

export default function OrdersPage({}: Props) {
  const query = useQuery<any, Error>({
    queryKey: ["sales"],
    queryFn: getSales,
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }
  return (
    <div className="flex flex-col gap-5 p-8 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={query?.data?.data} />
    </div>
  );
}
