import { createTheme } from '@mui/material/styles';

// Tema oscuro por defecto con estilo retro futurista
const theme = createTheme({
  palette: {
    primary: {
      main: '#10f144', // Verde vibrante para botones principales
      light: '#42f56a', // Verde claro para hover
      dark: '#0caa30', // Verde oscuro para sombras y borde
      contrastText: '#fff', // Texto blanco en botones
    },
    secondary: {
      main: '#f10ebc', // Rosa para botones secundarios
      light: '#f546d0', // Rosa claro para hover
      dark: '#ab0b84', // Rosa oscuro para sombras y borde
      contrastText: '#fff', // Texto blanco en botones secundarios
    },
    background: {
      default: '#e0e0e0', // Fondo claro para tarjetas
      paper: '#9c9da4', // Fondo gris suave
    },
    text: {
      primary: '#0c0c04', // Texto principal en negro
      secondary: '#10f144', // Acentos en verde
      disabled: '#9c9da4', // Texto deshabilitado en gris suave
    },
    error: {
      main: '#f44336', // Rojo para errores
    },
    warning: {
      main: '#ffa726', // Naranja para advertencias
    },
    info: {
      main: '#29b6f6', // Azul para información
    },
    success: {
      main: '#66bb6a', // Verde suave para éxito
    },
  },
  // Tema claro alternativo
  colorSchemes: {
    dark: {
      palette: {
        background: {    
          default: '#0c0c04', // Fondo negro profundo
          paper: '#151515', // Fondo para tarjetas o superficies
        },
        text: {
          primary: '#10f144', // Texto principal en verde
          secondary: '#fff', // Títulos y subtítulos en blanco
          disabled: '#9c9da4', // Texto deshabilitado en gris suave
        },
        primary: {
          main: '#10f144', // Verde para botones principales
          contrastText: '#fff', // Texto blanco
        },
        secondary: {
          main: '#f10ebc', // Rosa para botones secundarios
          contrastText: '#fff', // Texto blanco
        },
      },
    },
  },
});

export default theme;