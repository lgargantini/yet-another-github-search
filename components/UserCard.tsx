import { Card, Box, CardContent, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface UserCardProps {
  avatarSrc: string;
  title: string;
  subtitle: string;
}

export const UserCard = ({ avatarSrc, title, subtitle }: UserCardProps) => {
  const theme = useTheme();
  
  console.log('UserCard', avatarSrc, title, subtitle);
  return (
    <Card sx={{}} >
      <Box sx={{ }}>
        <CardContent sx={{display:'flex', flexDirection: 'column', alignItems:'center', alignContent:'center' }}>
          <Avatar alt="User Avatar" src={avatarSrc} variant='square' sx={{
            width: theme.spacing(10),
            height: theme.spacing(10),
          }} />
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: theme.palette.primary.main}}
          >
            {subtitle}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};