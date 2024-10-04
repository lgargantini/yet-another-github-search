import React from "react";
import {
  Grid2 as Grid,
  Avatar,
  Box,
  Typography,
  Link,
  useTheme,
} from "@mui/material";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { GitHubUser } from "../hooks/utils/github";

interface ProfileResumeProps {
  user: GitHubUser;
}

export const ProfileResume = ({ user }: ProfileResumeProps) => {
  const theme = useTheme();

  return (
    <Grid
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        width: "100%",
      }}
    >
      <Avatar
        alt="User Avatar"
        variant="rounded"
        src={user.avatar_url}
        sx={{
          width: {
            xs: "100%",
            sm: theme.spacing(30),
          },
          height: "auto",
          maxHeight: theme.spacing(40),
          marginRight: "2rem",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography component="span" sx={{ marginRight: "1rem" }} variant="h5">
          {user.name}
        </Typography>
        <Link component="span">@{user.login}</Link>
        <Typography sx={{ padding: "1em 0" }}>{user.bio}</Typography>
        <Typography
          sx={{
            display: "flex",
            justifyItems: "center",
            fontSize: 14,
          }}
        >
          <BadgeOutlinedIcon
            sx={{
              fontSize: 18,
              marginRight: "0.5rem",
              alignSelf: "center",
            }}
          />
          {user.company}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyItems: "center",
            fontSize: 14,
          }}
        >
          <LocationOnOutlinedIcon
            sx={{
              fontSize: 18,
              marginRight: "0.5rem",
              alignSelf: "center",
            }}
          />
          {user.location}
        </Typography>
        <Grid container gap={2} sx={{ mt: theme.spacing(2), }}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
                fontSize: 36,
                fontWeight: "bold",
              }}
            >
              {user.followers}
            </Typography>
            <Typography
              component="span"
              sx={{ display: "flex", justifyItems: "center" }}
            >
              Seguidores
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
                fontSize: 36,
                fontWeight: "bold",
              }}
            >
              {user.following}
            </Typography>
            <Typography
              component="span"
              sx={{ display: "flex", justifyItems: "center" }}
            >
              Siguiendo
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                alignSelf: "center",
                fontSize: 36,
                fontWeight: "bold",
              }}
            >
              {user.public_repos}
            </Typography>
            <Typography
              component="span"
              sx={{ display: "flex", justifyItems: "center" }}
            >
              Repos
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};
