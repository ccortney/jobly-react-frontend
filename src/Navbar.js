import { Link } from "react-router-dom";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const pages = ['companies', 'jobs'];
const settings = ['signup', 'login'];
const userSettings = [{route: "/", name: "Dashboard"}, {route: "/profile", name: "Edit Profile"}, {route: "/logout", name: "Logout"}]
const user = {name: "Camilla"}

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: "none", color: "white"}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

        {user && 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name}  />
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
              {userSettings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link 
                        to={setting.route} 
                        style={{textDecoration: "none", color: "black"}}
                    >
                        {setting.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        }
        {!user && 
            <Box sx={{ flexGrow: 0, display: { xs: 'flex' } }}>
            {settings.map((setting) => (
            <Button
                key={setting}
                onClick={handleCloseNavMenu}
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