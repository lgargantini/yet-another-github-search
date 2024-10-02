import { Stack } from "@mui/material";
import { Repository } from "../hooks/utils/github";

interface RepositoriesListProps {
  repositories: Repository[];
}

export const RepositoriesList = ({ repositories }: RepositoriesListProps) => (
  <Stack>
    {repositories.map((repo) => (
      <div key={repo.id}>
        <h3>{repo.full_name}</h3>
        <p>{repo.description}</p>
        <p>{repo.language}</p>
        <p>{repo.stargazers_count}</p>
        <p>{repo.forks_count}</p>
      </div>
    ))}
  </Stack>
);
