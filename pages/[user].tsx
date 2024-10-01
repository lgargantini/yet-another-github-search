import React, { useEffect } from "react";
import Head from "next/head";
import {
  CircularProgress,
  Container,
  Grid2 as Grid,
  Typography,
  Avatar,
  Box,
  Link,
} from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import Header from "@/components/Header";
import { ProfileResume } from "@/components/ProfileResume";
import { useGetUser } from "@/hooks/useGetUser";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

export default function UserProfile() {
  const theme = useTheme();
  const router = useRouter();
  const { user, loading, error, getUser } = useGetUser(
    router.query.user as string,
  );

  useEffect(() => {
    if (router.query.user) {
      getUser(router.query.user as string);
    }
  }, [router.query.user]);

  return (
    <>
      <Head>
        <title>Perfil de usuario - {user?.login}</title>
        <meta
          name="description"
          content={`Perfil de usuario de ${user?.login}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container maxWidth="lg">
        <Header />

        <Grid container size={12} spacing={4} sx={{ padding: "1rem" }}>
          {loading && <CircularProgress />}
          {error && <Typography color="error">{error}</Typography>}
          {user && (
            <>
              <ProfileResume user={user} />
            </>
          )}
        </Grid>

        <Grid
          size={12}
          sx={{
            display: "flex",
          }}
        >
          <footer>Santiago Barchetta - MIT License - 2024</footer>
        </Grid>
      </Container>
    </>
  );
}
