import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Link, Typography } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Link href="/" sx={{ color: "inherit", textDecoration: "none" }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            textAlign: "center",
            mt: 4,
            color: theme.palette.text.primary,
            fontWeight: "bold",
          }}
        >
          Yet Another Github User Search
        </Typography>
      </Link>
    </Box>
  );
}
