import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, CircularProgress, Container, Grid2 as Grid } from "@mui/material";
import Header from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { UserCard } from "@/components/UserCard";
import { PaginationSearch } from "@/components/PaginationSearch";
import { searchUsers } from "@/utils/github";

export default function Home() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pageSize = 20;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
    page: 1,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { users, count } = await searchUsers(
        query,
        pagination.from,
        pagination.to,
        pagination.page
      );
      setUsers(users);
      setPagination({ ...pagination, count });
    } catch (error: any) {
      setError(error);
      console.error("Error buscando usuarios:", error);
    } finally {
      setLoading(false);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handlePageChange = async (event: any, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from, to, page });
    setLoading(true);
    setError(null);
    try {
      const { users, count } = await searchUsers(query, from, to, page);
      setUsers(users);
      setPagination({ ...pagination, count });
      console.log("Usuarios encontrados:", users);
    } catch (error) {
      setError(error);
      console.error("Error buscando usuarios:", error);
    } finally {
      setLoading(false);
    }
  };

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
          <Grid container rowSpacing={1} size={12} flexDirection={"column"}>
            {loading && <CircularProgress />}
            {users.length > 0 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "left",
                    gap: "1rem",
                  }}
                >
                  {users.map((user, index) => (
                    <Grid key={`grid-${index}`} size={{ md: 3, sm: 6, xs: 12 }}>
                      <UserCard
                        key={`card-${index}`}
                        avatarSrc={`${user.avatar_url}`}
                        login={user.login}
                      />
                    </Grid>
                  ))}
                </Box>
                <PaginationSearch
                  onPageChange={handlePageChange}
                  pagination={{ ...pagination }}
                />
              </>
            )}
          </Grid>

          <Grid size={12}>
            <footer>Santiago Barchetta - MIT License - 2024</footer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
