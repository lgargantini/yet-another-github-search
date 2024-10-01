// /api/utils/github.ts
import { Octokit } from "octokit";

const octokit = new Octokit({});

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
}

export const searchUsers = async (query: string) => {
  try {
    const response = await octokit.rest.search.users({ q: query });
    return response.data.items;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const getUser = async (username: string) => {
  try {
    const response = await octokit.rest.users.getByUsername({ username });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}


export const getRepostories = async (username: string) => { 
  try {
    const response = await octokit.rest.repos.listForUser({ username });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}

export const getFollowers = async (username: string) => {}