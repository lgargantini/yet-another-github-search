import { TextField } from "@mui/material";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const onChangeTextField = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, setSearchQuery: (query: string) => void) => {
  setSearchQuery(e.target.value);
}

export const SearchBar = ({ setSearchQuery }: SearchBarProps) => (
    <form action="">
        <TextField
            id="standard-search"
            onChange={(e) => onChangeTextField(e, setSearchQuery)}
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