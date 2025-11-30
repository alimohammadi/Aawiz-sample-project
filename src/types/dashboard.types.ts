export interface PostProps {
  id: number;
  title: string;
  body: string;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (newPage: number) => void;
}
