import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';


export default function Home() {
  return (
    <>
      <Head>
        <title>yet another github user search</title>
        <meta name="description" content="yet another github user search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page}`}
      >
        <main>
          <h1>/// yet another github user search ///</h1>
          <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid
            container
            sx={{
              '--Grid-borderWidth': '2px',
              borderTop: 'var(--Grid-borderWidth) solid',
              borderLeft: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              '& > div': {
                borderRight: 'var(--Grid-borderWidth) solid',
                borderBottom: 'var(--Grid-borderWidth) solid',
                borderColor: 'divider',
              },
            }}
          >
            {[...Array(6)].map((_, index) => (
              <Grid
                key={index}
                minHeight={160}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
              />
            ))}
          </Grid>
        </Box>
          
          <p>Search for a user</p>
          <input type="text" />
          <button>Search</button>

          <p>Results</p>
          <ul>
            <li>card user 1</li>
            <li>card user 2</li>
            <li>card user 3</li>
          </ul>

        </main>
        
        <aside>
          Favoritos
          <ul>
            <li>user 1</li>
            <li>user 2</li>
            <li>user 3</li>
          </ul>
        </aside>
        <footer>
          Credenciales
        </footer>
      </div>
    </>
  );
}
