"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const inter = Inter({ subsets: ["latin"] });

// Initialize the QueryClient
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen w-full p-8 bg-white text-black flex', inter.className, { "debug-screens": process.env.NODE_ENV === "development" })}>
        <QueryClientProvider client={queryClient}>
          <SideNavbar />
            {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
