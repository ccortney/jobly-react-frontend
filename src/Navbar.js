import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import UserContext from "./UserContext"

/**
 * Navbar component for Jobly app
 * Renders links to homepage, companies, and jobs routes. 
 * When logged in, a dropdown is rendered the links to edit profile and logout.
 * When not logged in, links to login or signup is rendered
 * 
 * @props logout function
 */


const Navbar = ({logout}) => {
    const user = useContext(UserContext)

    const pages = ['companies', 'jobs'];
    const settings = ['signup', 'login'];

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                JOBLY
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                {pages.map((page) => (
                <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link 
                        style={{textDecoration: "none", color: "white"}} 
                        to={`/${page}`}
                    >
                        {page}
                    </Link>
                </Button>
                ))}
            </Box>

            {user && 
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.firstName.toUpperCase()} src="/static/images/avatar/2.jpg"/>
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                <MenuItem key="profile" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                        <Link 
                            to="/profile" 
                            style={{textDecoration: "none", color: "black"}}
                        >
                            Edit Profile
                        </Link>
                    </Typography>
                 </MenuItem>
                 <MenuItem key="logout" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                        <Link 
                            onClick={logout}
                            to='/login' 
                            style={{textDecoration: "none", color: "black"}}
                        >
                            Logout
                        </Link>
                    </Typography>
                 </MenuItem>
                </Menu>
            </Box>
            }
            {!user && 
                <Box sx={{ flexGrow: 0, display: { xs: 'flex' } }}>
                {settings.map((setting) => (
                <Button
                    key={setting}
                    sx={{ mr: 1, color: 'white', display: 'block' }}
                >
                    <Link style={{textDecoration: "none", color: "white"}} to={`/${setting}`}>{setting}</Link>
                </Button>
                ))}
            </Box>
            }
            </Toolbar>
        </Container>
        </AppBar>
    );
    }

export default Navbar;