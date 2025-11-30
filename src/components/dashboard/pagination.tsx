import React from "react";
import { Button } from "../ui/button";
import { PaginationProps } from "@/types/dashboard.types";

const Pagination: React.FC<PaginationProps> = ({ onChange, ...props }) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 mt-6">
        <Button
          disabled={props.page === 1}
          onClick={() => onChange(props.page - 1)}
        >
          Prev
        </Button>
        <span>
          Page {props.page} of {props.totalPages}
        </span>
        <Button
          disabled={props.page === props.totalPages}
          onClick={() => onChange(props.page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Pagination);
