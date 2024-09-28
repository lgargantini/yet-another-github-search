import { Octokit } from "octokit";
import { useState, useEffect } from "react";

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

const octokit = new Octokit({});

const useSearchUser = (
  q: string,
  since: number = 0,
  perPage: number = 30,
  page: number = 1,
) => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await octokit.rest.search.users({ q });

        if (response.status !== 200) {
          throw new Error("Error fetching users");
        }

        const data: GitHubUser[] = await response.data.items;
        setUsers(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [since, perPage]);

  return { users, loading, error };
};

export default useSearchUser;
