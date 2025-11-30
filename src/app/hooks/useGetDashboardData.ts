import { PostProps } from "@/types/dashboard.types";
import { getData } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useGetDahsboardData = () => {
  return useQuery<PostProps[]>({
    queryKey: ["posts"],
    queryFn: () =>
      getData<PostProps[]>("https://jsonplaceholder.typicode.com/posts"),
  });
};
