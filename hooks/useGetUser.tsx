import { useState, useCallback } from "react";
import { getUser as getGithubUser } from "../utils/github";
import { GitHubUser } from "../utils/types";

export const useGetUser = (username: string) => {
  const [user, setUser] = useState<GitHubUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const getUser = useCallback(
    async (username: string) => {
      setLoading(true);
      setError(null);
      try {
        const data: GitHubUser = await getGithubUser(username);
        setUser(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    [username]
  );

  return { user, getUser, loading, error };
};
