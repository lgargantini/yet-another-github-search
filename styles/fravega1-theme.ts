import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Tema por defecto
    primary: {
      main: '#3c14a0', // Azul oscuro para botones principales
      contrastText: '#ffffff', // Texto blanco
      light: '#6649d2', // Azul claro
      dark: '#2a0e73', // Azul más oscuro
    },
    secondary: {
      main: '#b4148c', // Rosa oscuro para botones secundarios
      contrastText: '#ffffff', // Texto blanco
      light: '#c94ea6', // Rosa claro
      dark: '#7c0e62', // Rosa más oscuro
    },
    background: {
      default: '#f0f0f0', // Fondo gris claro
      paper: '#ffffff', // Fondo blanco para tarjetas
    },
    text: {
      primary: '#000000', // Texto principal en negro
      secondary: '#3c14a0', // Acentos en azul oscuro
      disabled: '#f0f0f0', // Texto deshabilitado en gris claro
    },
    error: {
      main: '#f44336', // Rojo para errores
    },
    warning: {
      main: '#ffa726', // Naranja para advertencias
    },
    info: {
      main: '#29b6f6', // Azul claro para información
    },
    success: {
      main: '#66bb6a', // Verde para éxito
    },
  },
  typography: {
    fontFamily: 'monospace', // Fuente estilo retro/terminal
    h1: {
      color: '#ffffff', // Títulos en blanco
    },
    h2: {
      color: '#ffffff',
    },
    body1: {
      color: '#f0f0f0', // Texto principal en gris claro
    },
  },
  // Tema claro alternativo
  colorSchemes: {
    dark: {
      palette: {
        background: {
          default: '#141414', // Fondo oscuro (Sooty)
          paper: '#1f1f1f', // Fondo de tarjetas ligeramente más claro
        },
        text: {
          primary: '#ffffff', // Texto principal blanco
          secondary: '#b4148c', // Acentos en rosa oscuro
        },
        primary: {
          main: '#3c14a0', // Azul oscuro
          contrastText: '#ffffff', // Texto blanco
        },
        secondary: {
          main: '#b4148c', // Rosa oscuro vibrante
          contrastText: '#ffffff', // Texto blanco
        },
      },
    },
  },
});

export default theme;