import { Box, Stack, Typography, Link } from "@mui/material";
import {
  Star as StarIcon,
  ForkLeft as ForkLeftIcon,
} from "@mui/icons-material";
import { Repository } from "../utils/types";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
dayjs.extend(relativeTime);
dayjs.locale("es");

import theme from "@/styles/terminal-glow-theme";

interface RepositoriesListProps {
  repositories: Repository[];
}

const RepositoryItem = ({ repo }: { repo: Repository }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 4,
      pb: theme.spacing(2),
      mb: theme.spacing(4),
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
    }}
  >
    <Link
      href={repo.html_url}
      sx={{
        color: theme.palette.primary.dark,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
        width: "100%",
        fontSize: "1.2rem",
      }}
    >
      {repo.name}
    </Link>
    <Box
      sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      gap={2}
    >
      <Box gap={2} display={"flex"}>
        {repo.language && (
          <Typography sx={{ fontSize: "0.8rem" }}>{repo.language}</Typography>
        )}
        {repo.stargazers_count !== undefined && (
          <Typography
            sx={{ fontSize: "0.8rem", display: "flex", alignItems: "center" }}
          >
            <StarIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
            {repo.stargazers_count}
          </Typography>
        )}
        {repo.forks_count !== undefined && (
          <Typography
            sx={{ fontSize: "0.8rem", display: "flex", alignItems: "center" }}
          >
            <ForkLeftIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
            {repo.forks_count}
          </Typography>
        )}
      </Box>
      {repo.pushed_at && (
        <Typography sx={{ fontSize: "0.8rem" }}>
          Última actividad: {dayjs().to(dayjs(repo.pushed_at), true)}
        </Typography>
      )}
    </Box>
  </Box>
);

export const RepositoriesList = ({ repositories }: RepositoriesListProps) => (
  <Stack sx={{ width: "100%" }}>
    {repositories.map((repo) => (
      <RepositoryItem repo={repo} />
    ))}
  </Stack>
);
