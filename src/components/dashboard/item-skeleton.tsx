import { PAGE_SIZE } from "@/app/data/dashboard.dat";

const SkeletonDashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="h-10 w-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-10 w-64 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-xl shadow-lg bg-gray-200 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonDashboard;
