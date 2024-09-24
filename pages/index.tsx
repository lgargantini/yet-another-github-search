import Head from 'next/head';
import { 
  Container,
  Grid2 as Grid
} from '@mui/material';
import { UserCard, UserCardProps } from '@/components/UserCard';
import { useTheme } from '@mui/material';

// import { SearchBar } from '@/components/SearchBar2';
import { SearchBar } from '@/components/SearchBar';
import Header from '@/components/Header';
import { useState } from 'react';

const baseUrl = 'https://api.dicebear.com/9.x/pixel-art/svg';
const queryParams = 'backgroundType=solid,gradientLinear&randomizeIds=true&accessoriesColor=a9a9a9,d3d3d3,daa520,fafad2,ffd700,transparent&accessoriesProbability=30&beardProbability=20&clothingColor=00b159,03396c,ffc425,428bca,d11141,ae0001,44c585&eyesColor=588387,5b7c8b,647b90,697b94,76778b,876658,transparent&hairColor=009bbd,28150a,603015,611c17,612616,91cb15,a78961,bd1700,cab188&skinColor=8d5524,b68655,e0b687,f5cfa0';

const userCardData: UserCardProps[] = [
  {
    avatarSrc: `${baseUrl}?seed=JohnDoe&${queryParams}`,
    title: 'John Doe',
    subtitle: 'Software Engineer',
  },
  {
    avatarSrc: `${baseUrl}?seed=JaneSmith&${queryParams}`,
    title: 'Jane Smith',
    subtitle: 'Product Manager',
  },
  {
    avatarSrc: `${baseUrl}?seed=AliceJohnson&${queryParams}`,
    title: 'Alice Johnson',
    subtitle: 'UX Designer',
  },
  {
    avatarSrc: `${baseUrl}?seed=BobBrown&${queryParams}`,
    title: 'Bob Brown',
    subtitle: 'DevOps Engineer',
  },
  {
    avatarSrc: `${baseUrl}?seed=CharlieDavis&${queryParams}`,
    title: 'Charlie Davis',
    subtitle: 'Data Scientist',
  },
  {
    avatarSrc: `${baseUrl}?seed=DianaEvans&${queryParams}`,
    title: 'Diana Evans',
    subtitle: 'Frontend Developer',
  },
  {
    avatarSrc: `${baseUrl}?seed=EthanHarris&${queryParams}`,
    title: 'Ethan Harris',
    subtitle: 'Backend Developer',
  },
  {
    avatarSrc: `${baseUrl}?seed=FionaGreen&${queryParams}`,
    title: 'Fiona Green',
    subtitle: 'QA Engineer',
  },
  {
    avatarSrc: `${baseUrl}?seed=GeorgeKing&${queryParams}`,
    title: 'George King',
    subtitle: 'Project Manager',
  },
  {
    avatarSrc: `${baseUrl}?seed=HannahLee&${queryParams}`,
    title: 'Hannah Lee',
    subtitle: 'Business Analyst',
  },
];

const filterUserData = (query: string, data: UserCardProps[]): UserCardProps[] => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.title.toLowerCase().includes(query.toLowerCase()));
    }
};


export default function Home() {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  
  const dataFiltered = filterUserData(searchQuery, userCardData);

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
          <Grid container spacing={4} size={12} sx={{ padding: '1rem' }}>

            {/* Buscador */}
            <Grid size={12} sx={{ textAlign: 'center', padding: '1rem' }}>
            {/* <SearchBar /> */}
              <SearchBar setSearchQuery={setSearchQuery} />
            </Grid>

            {/* Cards de usuarios */}
            <Grid container rowSpacing={1}>
              {dataFiltered.map((user, index) => (
                <Grid key={`grid-${index}`} size={{ md: 3, sm: 6, xs: 12 }}>
                  
                  <UserCard key={`card-${index}`} avatarSrc={`${user.avatarSrc}`} title={user.title} subtitle={user.subtitle}/>
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
