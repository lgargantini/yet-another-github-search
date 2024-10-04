import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          textAlign: "center",
          mt: 4,
          color: theme.palette.text.primary,
        }}
      >
        /// yet another github user search ///
      </Typography>
    </>
  );
}
