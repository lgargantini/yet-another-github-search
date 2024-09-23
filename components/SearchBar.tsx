import { TextField } from "@mui/material";

export const SearchBar = () => {
    // const theme = useTheme();
    return (
        <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
            sx={{
                textAlign: 'center',
            }}
        />
    )
}