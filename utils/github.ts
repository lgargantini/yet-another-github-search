import { Octokit } from "octokit";
import { GitHubUser, Repository } from "./types";


const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN, 
});

export async function searchUsers(query: string, from: number, to: number, page: number) {
  try {
    const response = await octokit.rest.search.users({
      q: query,
      per_page: to - from,
      page: page,
    });
    const users = response.data.items as unknown as GitHubUser[];
    const count = response.data.total_count as number;
    return { users, count };
  } catch (error) {
    console.error("Error buscando usuarios:", error);
    throw error;
  }
}

export const getUser = async (username: string) => {
  try {
    const response = await octokit.rest.users.getByUsername({ username });
    return response.data as unknown as GitHubUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}

export const getRepositories = async (username: string): Promise<Repository[]> => { 
  try {
    const response = await octokit.rest.repos.listForUser({
      username,
      sort: "pushed",
      direction: "desc",
      per_page: 10,
    });
    return response.data as unknown as Repository[];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}

export const getFollowers = async (username: string): Promise<GitHubUser[]> => {
  try {
    const response = await octokit.rest.users.listFollowersForUser({
      username,
      per_page: 10,
    });
    return response.data as unknown as GitHubUser[];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
