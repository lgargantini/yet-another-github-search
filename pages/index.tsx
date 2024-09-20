import { 
  Grid2 as Grid,
  Stack,
  Typography,
  TextField,
  Card,
  CardContent
} from '@mui/material';
import UserCard from '@/components/UserCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/terminal-glow-theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" component="h1" sx={
        {
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom: '1rem',
        }
      }>
      /// yet another github user search ///
      </Typography>
      
      {/* Contenedor */}
      <Grid container spacing={4} sx={
        {
          marginTop: '1rem',
          marginBottom: '1rem',
        }
      }>

        {/* Buscador */}
        <Grid size={12} sx={
          {
            textAlign: 'center',
            padding: '1rem',
          }
        }>
          <Typography component="label">Search for a user</Typography>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
        </Grid>

        {/* Cards de usuarios */}
        <Grid container size={{xs: 12, sm: "grow"}} rowSpacing={1}>
          {['size=4', 'size=4', 'size=4'].map((text, index) => (
            <UserCard key={`card-${index}`} avatarSrc={`https://avatar.iran.liara.run/public?u=${Date.now}`} title={text} subtitle={text} />
          ))}
        </Grid>

        {/* Favoritos*/}
        <Grid container  rowSpacing={4}>
          <Stack
            direction="column"
          >
            {['size=4', 'size=4', 'size=4'].map((text, index) => (
              <Grid key={`card-${index}`} size={{ xs: 12, sm: 4, md: 4 }} sx={{
                textAlign: 'center',
                padding: '1rem',
                border: '1px solid #0ef143',
                borderRadius: '5px',
                '&:hover': {
                  boxShadow: '0 4px 4px #0ef143',
                },
              }}>
                {text}
              </Grid>
            ))}
          </Stack>
        </Grid>
      </Grid>
      
      <footer>
        Credenciales
      </footer>  
    </ThemeProvider>
  );
}
