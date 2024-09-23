import { Grid2 as Grid, Stack } from "@mui/material"

interface SidebarProps {
    elements: string[];
}

export const Sidebar = ({ elements }: SidebarProps) => {
    return (
        <Stack direction="column">
            {elements.map((text, index) => (
            <Grid key={`card-${index}`} size={{ xs: 12, sm: 4, md: 4 }} sx={{
                textAlign: 'center',
                padding: '1rem',
                border: '1px solid #0ef143',
                borderRadius: '5px',
                '&:hover': {
                boxShadow: '0 4px 4px #0ef143',
                },
            }}>
                {text}
            </Grid>
            ))}
        </Stack>
    )   
}