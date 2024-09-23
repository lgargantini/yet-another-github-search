import Head from 'next/head';
import { 
  Container,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { UserCard, UserCardProps } from '@/components/UserCard';
import { useTheme } from '@mui/material';

import { SearchBar } from '@/components/SearchBar';
import Header from '@/components/Header';

const userCardData: UserCardProps[] = [
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/1',
        title: 'John Doe',
        subtitle: 'Software Engineer',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/2',
        title: 'Jane Smith',
        subtitle: 'Product Manager',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/3',
        title: 'Alice Johnson',
        subtitle: 'UX Designer',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/4',
        title: 'Bob Brown',
        subtitle: 'DevOps Engineer',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/5',
        title: 'Charlie Davis',
        subtitle: 'Data Scientist',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/6',
        title: 'Diana Evans',
        subtitle: 'Frontend Developer',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/7',
        title: 'Ethan Harris',
        subtitle: 'Backend Developer',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/8',
        title: 'Fiona Green',
        subtitle: 'QA Engineer',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/9',
        title: 'George King',
        subtitle: 'Project Manager',
    },
    {
        avatarSrc: 'https://avatar.iran.liara.run/public/10',
        title: 'Hannah Lee',
        subtitle: 'Business Analyst',
    },
];

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>yet another github user search</title>
        <meta name="description" content="yet another github user search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
        <Container sx={{
          backgroundColor: theme.palette.background.default,
        }}>
          <Header />
        
          {/* Contenedor */}
          <Grid container spacing={4} size={12} sx={
              {
                padding: '1rem',
              }
            }>

            {/* Buscador */}
            <Grid size={12} sx={
              {
                textAlign: 'center',
              padding: '1rem',
              }
            }>
              <SearchBar />
            </Grid>

            {/* Cards de usuarios */}
            <Grid container rowSpacing={1}>
              {userCardData.map((user, index) => (
                <Grid>
                  <UserCard key={`card-${index}`} avatarSrc={`${user.avatarSrc}`} title={user.title} subtitle={user.subtitle} />
                </Grid> 
              ))}
            </Grid>

            <Grid size={12}>
              <footer>
                Santiago Barchetta - MIT License - 2024
              </footer>  
            </Grid>
          </Grid>
          </Container>
    </>
  );
}
