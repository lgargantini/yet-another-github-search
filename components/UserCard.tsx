import { Card, Box, CardContent, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface UserCardProps {
  avatarSrc: string;
  title: string;
  subtitle: string;
}

export const UserCard = ({ avatarSrc, title, subtitle }: UserCardProps) => {
  const theme = useTheme();

  return (
    <Card sx={{backgroundColor:theme.palette.background.paper,  }} >
      <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center', alignContent:'center' ,backgroundColor: theme.palette.background.paper, alignSelf: 'stretch' }}>
        <CardContent>
          <Avatar alt="User Avatar" src={avatarSrc} variant='square' sx={{
            width: theme.spacing(10),
            height: theme.spacing(10),
            margin: 'auto',
            alignSelf: 'center',
          }} />
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.primary' }}
          >
            {subtitle}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};