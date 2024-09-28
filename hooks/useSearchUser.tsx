import { Octokit } from "octokit";
import { useState, useCallback } from "react";

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const octokit = new Octokit({});

export const useSearchUser = (
  q: string,
  since: number = 0,
  perPage: number = 30,
  page: number = 1,
) => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchUsers = useCallback(
    async (q: string) => {
      setLoading(true);
      setError(null);

      try {
        const response = await octokit.rest.search.users({
          q,
          since,
          per_page: perPage,
          page,
        });

        console.log("users", response.data.items);

        if (response.status !== 200) {
          throw new Error("Error fetching users");
        }

        const data: GitHubUser[] = response.data.items;
        setUsers(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    [q, since, perPage, page],
  );

  return { users, loading, error, searchUsers };
};
