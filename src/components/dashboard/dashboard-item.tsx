import { PostProps } from "@/types/dashboard.types";
import React from "react";

const DashboardItem: React.FC<PostProps> = (post) => {
  return (
    <li
      key={post.id}
      className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition bg-white dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        ID: {post.id}
      </div>
    </li>
  );
};

export default DashboardItem;
