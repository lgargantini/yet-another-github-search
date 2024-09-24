import { TextField } from "@mui/material";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

export const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
    <form action="">
    <TextField
        id="standard-search"
        onInput={(e) => {
            setSearchQuery((e.target as HTMLInputElement).value);
        }}
        variant="standard"
        placeholder="Busca un usuario por su nombre o @..."
        sx={{
            textAlign: 'center',
            width: '100%',
            fontSize: '3.5rem',
        }}
        />
    </form>
)