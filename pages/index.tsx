import React, { useEffect } from "react";
import Head from "next/head";
import { CircularProgress, Container, Grid2 as Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import Header from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { UserCard } from "@/components/UserCard";
import { useSearchContext } from "@/context/SearchContext";
import { useSearchUser } from "@/hooks/useSearchUsers";

export default function Home() {
  const theme = useTheme();
  const { query, setQuery, result, setResult } = useSearchContext();
  const { users, loading, error, searchUsers } = useSearchUser(query);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult([]);
    console.log("Buscando usuarios...");
    searchUsers(query);
    console.log("Usuarios encontrados:", users);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setResult(users);
  }, [users]);

  return (
    <>
      <Head>
        <title>yet another github user search</title>
        <meta name="description" content="yet another github user search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Container maxWidth="lg">
        <Header />

        {/* Contenedor */}
        <Grid container spacing={4} size={12} sx={{ padding: "1rem" }}>
          {/* Buscador */}
          <Grid size={12} sx={{ textAlign: "center", padding: "1rem" }}>
            <SearchBar
              onSubmit={(e) => onSubmit(e)}
              onChangeInput={(e) => onChangeInput(e)}
            />
          </Grid>

          {/* Cards de usuarios */}
          <Grid container rowSpacing={1} size={12}>
            {/* {result.length === 0 && !loading && (
              <Grid
                size={12}
                sx={{
                  textAlign: "center",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="User Avatar"
                  src="https://api.dicebear.com/9.x/pixel-art/svg?seed=sa&eyes=variant02,variant03,variant04,variant05,variant06,variant11,variant09,variant10&mouth=sad10,sad09,sad08,sad07,sad06,sad05,sad04,sad03,sad02,sad01"
                  variant="square"
                  sx={{
                    width: theme.spacing(10),
                    height: theme.spacing(10),
                  }}
                />
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    padding: "1rem",
                  }}
                >
                  No se encontró ningún usuario
                </Typography>
              </Grid>
            )} */}

            {loading && <CircularProgress />}
            {result.length > 0 &&
              result.map((user, index) => (
                <Grid key={`grid-${index}`} size={{ md: 3, sm: 6, xs: 12 }}>
                  <UserCard
                    key={`card-${index}`}
                    avatarSrc={`${user.avatar_url}`}
                    login={user.login}
                  />
                </Grid>
              ))}
          </Grid>

          <Grid size={12}>
            <footer>Santiago Barchetta - MIT License - 2024</footer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
