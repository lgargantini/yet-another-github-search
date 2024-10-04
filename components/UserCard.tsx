import {
  Card,
  Box,
  CardContent,
  Typography,
  Avatar,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export interface UserCardProps {
  avatarSrc: string;
  login: string;
}

export const UserCard = ({ avatarSrc, login }: UserCardProps) => {
  const theme = useTheme();
  return (
    <Card sx={{}}>
      <Link
        href={`/${login}`}
        sx={{
          color: theme.palette.primary.dark,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
          width: "100%",
          fontSize: "1.2rem",
        }}
      >
        <Box sx={{}}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Avatar
              alt="User Avatar"
              src={avatarSrc}
              variant="rounded"
              sx={{
                width: theme.spacing(10),
                height: theme.spacing(10),
              }}
            />
            <Typography component="div" variant="h5">
              {login}
            </Typography>
          </CardContent>
        </Box>
      </Link>
    </Card>
  );
};
