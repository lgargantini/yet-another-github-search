import { useCallback, useState } from "react";
import { getFollowers as getGithubFollowers } from "../utils/github";
import { GitHubUser } from "../utils/types";

export const useGetFollowers = (username: string | null) => {
  const [followers, setFollowers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getFollowers = useCallback(
    async (username: string) => {
      setLoading(true);
      setError(null);
      try {
        const data = await getGithubFollowers(username);
        setFollowers(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },
    [username]
  );

  return { followers, getFollowers, loading, error };
};
