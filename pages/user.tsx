import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/terminal-glow-theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Detalle de usuario</h1>
    </ThemeProvider>
  );
}
