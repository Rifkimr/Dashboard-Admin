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
import { PresetActions } from "@/components/presetAction";
import { getProducts, Product } from "@/my-api/myApi";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => <PresetActions />,
  },
];
//     date: "2024-07-06",
//     invoiceNo: "INV-123456",
//     customer: "John Doe",
//     qty: 5,
//     totalHarga: 500000,
//   },
//   {
//     date: "2024-07-07",
//     invoiceNo: "INV-123457",
//     customer: "Jane Smith",
//     qty: 2,
//     totalHarga: 200000,
//   },
//   {
//     date: "2024-07-08",
//     invoiceNo: "INV-123458",
//     customer: "Alice Johnson",
//     qty: 10,
//     totalHarga: 1000000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Anwar",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },
//   {
//     date: "2024-07-09",
//     invoiceNo: "INV-123459",
//     customer: "Bob Brown",
//     qty: 3,
//     totalHarga: 300000,
//   },

// ];

export default function ProdukPage({}: Props) {
  const query = useQuery<any, Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  console.log("Ini DAtanya", query?.data?.data);

  return (
    <div className="flex flex-col gap-5 w-full p-8">
      <PageTitle title="Produk" />
      <DataTable columns={columns} data={query?.data?.data} />
    </div>
  );
}
