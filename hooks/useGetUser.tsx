import { Octokit } from "octokit";
import { useState, useCallback } from "react";
import { GitHubUser, getUser } from "./utils/github";

const octokit = new Octokit({});

export const useGetUser = (username: string) => {
  const [user, setUser] = useState<GitHubUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const getUser = useCallback(
    async (username: string) => {
      setLoading(true);
      setError(null);
      try {
        const response = await octokit.request(`GET /users/${username}`, {
          username,
        });

        console.log("user", response.data);

        if (response.status !== 200) {
          throw new Error("Error fetching user");
        }

        const data: GitHubUser = response.data;
        setUser(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    [username],
  );

  return { user, loading, error, getUser };
};
