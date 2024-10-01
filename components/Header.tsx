import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, Drawer, Typography } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  //make a list of favs, an array of objects with name and url
  const favs = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  const [open, setOpen] = useState(true);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)} variant="persistent">
                {favs.map((fav, index) => (
                    <Button key={`fav-${index}`} href={fav.url} sx={{width: '100%'}}>
                        {fav.name}
                    </Button>
                ))}
            </Drawer> */}
      <Typography
        variant="h3"
        component="h1"
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
