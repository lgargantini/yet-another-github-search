import { Star, StarBorder } from "@mui/icons-material";
import {
  Card,
  Box,
  CardContent,
  Typography,
  Avatar,
  Link,
  IconButton,
} from "@mui/material";
import theme from "@/styles/terminal-glow-theme";
import { useState } from "react";

export interface UserCardProps {
  avatarSrc: string;
  login: string;
}

export const UserCard = ({ avatarSrc, login }: UserCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{}}>
      <Link
        href={`/${login}`}
        sx={{
          color: theme.palette.primary.dark,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
          width: "100%",
          fontSize: "1.2rem",
        }}
      >
        <Box sx={{}}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Avatar
              alt="User Avatar"
              src={avatarSrc}
              variant="rounded"
              sx={{
                width: theme.spacing(10),
                height: theme.spacing(10),
              }}
            />
            <Typography
              component="div"
              variant="h5"
              sx={{ fontSize: "1.1rem" }}
            >
              {login}
            </Typography>
            <IconButton
              onClick={handleFavoriteClick}
              sx={{
                alignSelf: "flex-start",
                right: 0,
                top: 0,
                padding: theme.spacing(1),
              }}
            >
              {isFavorite ? <Star color="primary" /> : <StarBorder />}
            </IconButton>
          </CardContent>
        </Box>
      </Link>
    </Card>
  );
};
