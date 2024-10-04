import { useEffect } from "react";
import { Box, Pagination } from "@mui/material";

interface PaginationSearchProps {
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  pagination: { from: number; to: number; count: number };
}

export const PaginationSearch = ({
  handlePageChange,
  pagination,
}: PaginationSearchProps) => {
  useEffect(() => {
    console.log("Paginando desde", pagination.from, "hasta", pagination.to);
  }, [pagination.to, pagination.from]);

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      sx={{
        margin: "20px 0px",
      }}
    >
      <Pagination
        onChange={handlePageChange}
        count={Math.ceil(pagination.count / pagination.to)}
      />
    </Box>
  );
};
