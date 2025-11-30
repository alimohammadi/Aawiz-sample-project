"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useGetDahsboardData } from "../hooks/useGetDashboardData";
import { PAGE_SIZE } from "../data/dashboard.dat";
import SkeletonDashboard from "@/components/dashboard/item-skeleton";
import { Input } from "@/components/ui/input";
import DashboardItem from "@/components/dashboard/dashboard-item";
import Pagination from "@/components/dashboard/pagination";
import Header from "@/components/global/header";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, refetch } = useGetDahsboardData();

  // Filtered & paginated posts
  const filteredPosts = useMemo(() => {
    if (!data) return [];
    return data.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredPosts.slice(start, start + PAGE_SIZE);
  }, [filteredPosts, page]);

  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);

  if (isLoading) return <SkeletonDashboard />;

  if (isError)
    return <div className="p-6 text-red-500">Failed to load data.</div>;

  return (
    <section className="max-w-6xl mx-auto">
      <Header />
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
            />
            <Button onClick={() => refetch()}>Refresh</Button>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedPosts.map((post) => (
            <DashboardItem key={post.id} {...post} />
          ))}
        </ul>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination onChange={setPage} page={page} totalPages={totalPages} />
        )}
      </div>
    </section>
  );
}
