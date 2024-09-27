import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/terminal-glow-theme';
import { SearchProvider } from "@/context/SearchContext"; // Adjust the import path as necessary

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchProvider>
          <Main />
        </SearchProvider>
      </ThemeProvider>
      <NextScript />
    </Html>
  );
}
