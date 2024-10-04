import { Input } from "@mui/material";

interface SearchBarProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const SearchBar = ({ onSubmit, onChangeInput }: SearchBarProps) => (
  <form action="" onSubmit={(e) => onSubmit(e)}>
    <Input
      id="standard-search"
      onChange={(e) => onChangeInput(e)}
      type="search"
      placeholder="Busca un usuario por su nombre o @..."
      sx={{
        textAlign: "center",
        width: "100%",
        fontSize: "2.5rem",
      }}
    />
  </form>
);
