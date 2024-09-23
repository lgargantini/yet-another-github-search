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
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{backgroundColor:theme.palette.background.paper}}>
          <Avatar alt="User Avatar" src={avatarSrc} sx={{
            width: theme.spacing(10),
            height: theme.spacing(10),
            margin: 'auto',
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
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
    </Card>
  );
};