import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

export const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery((e.target as HTMLInputElement).value);
      }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

