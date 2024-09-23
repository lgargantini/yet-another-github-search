import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/terminal-glow-theme';

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
      <body>
        <CssBaseline enableColorScheme={true} />
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
        <NextScript />
      </body>
    </Html>
  );
}
