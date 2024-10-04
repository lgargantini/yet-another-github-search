import React, { useEffect } from "react";
import Head from "next/head";
import {
  CircularProgress,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import Header from "@/components/Header";
import { ProfileResume } from "@/components/ProfileResume";
import { useGetUser } from "@/hooks/useGetUser";
import { RepositoriesList } from "@/components/RepositoriesList";
import { useGetRepositories } from "@/hooks/useGetRepositories";
import { FollowerList } from "@/components/FollowerList";
import { useGetFollowers } from "@/hooks/useGetFollowers";

export default function UserProfile() {
  const router = useRouter();
  const { user, loading, error, getUser } = useGetUser(
    router.query.user as string
  );

  const {
    repositories,
    loading: loadingRepos,
    error: errorRepos,
    getRepositories,
  } = useGetRepositories(null);

  const {
    followers,
    loading: loadingFollowers,
    error: errorFollowers,
    getFollowers,
  } = useGetFollowers(null);

  useEffect(() => {
    if (router.query.user) {
      getUser(router.query.user as string);
    }
  }, [router.query.user]);

  useEffect(() => {
    if (user) {
      getRepositories(user.login);
      getFollowers(user.login);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>{`YAGUS - ${user?.login}`}</title>
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
        <Grid container size={12} spacing={8} sx={{ display: "flex" }}>
          <Grid size={{ sm: 6, xs: 12 }}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              Repositorios
            </Typography>
            <Grid container size={12} spacing={2}>
              <RepositoriesList repositories={repositories} />
            </Grid>
          </Grid>
          <Grid size={{ sm: 6, xs: 12 }}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              Seguidores
            </Typography>
            <Grid container size={12} spacing={2}>
              <FollowerList followers={followers} />
            </Grid>
          </Grid>
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
