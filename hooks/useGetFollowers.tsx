import { useCallback, useEffect, useState } from "react";
import { Octokit } from "octokit";
import { GitHubUser, getFollowers as getGithubFollowers } from "./utils/github";

const octokit = new Octokit({});

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
    [username],
  );

  return { followers, getFollowers, loading, error };
};
