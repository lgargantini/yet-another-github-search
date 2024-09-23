import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const theme = useTheme();
    //make a list of favs, an array of objects with name and url
    const favs = [
        {name: 'Home', url: '/'},
        {name: 'About', url: '/about'},
        {name: 'Contact', url: '/contact'}
    ]
    return (
        <>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    textAlign: 'center',
                    mt: 4,
                    color: theme.palette.text.primary,
                }}>
                    /// yet another github user search ///
            </Typography>
        </>
    )
 }