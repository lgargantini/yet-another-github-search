import { Card, Box, CardContent, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export interface UserCardProps {
  avatarSrc: string;
  login: string;
}

export const UserCard = ({ avatarSrc, login }: UserCardProps) => {
  const theme = useTheme();
  return (
    <Card sx={{}}>
      <Link href={`/${login}`}>
        <Box sx={{}}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
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
