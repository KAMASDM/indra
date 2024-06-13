import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo1.png';
import logoone from '../../assets/logo2.png';
import { Link as RouterLink } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from "../../theme/getLPTheme"
import { useNavigate } from 'react-router-dom';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingLogo = styled.img`
  height: 100px;
  animation: ${rotate} 10s linear infinite;
`;

function Navbar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const LPtheme = createTheme(getLPTheme(mode));

  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/Donate');
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor: 'hsla(220, 60%, 99%, 0.6)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
            })}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 0,
                overflow: 'visible',
              }}
            >
              <RotatingLogo src={logo} alt="Indraprasth Foundation Logo" />
              <img src={logoone} alt="Indraprasth Foundation Logo" style={{ height: 150, marginTop: 0 }} />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1, gap: 1 }}>
              <Button
                component={RouterLink}
                to="/"
                variant="text"
                color="info"
                size="large"
                sx={{ fontWeight: 'bold' }}
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/about-us"
                variant="text"
                color="info"
                size="large"
                sx={{ fontWeight: 'bold' }}
              >
                About Us
              </Button>
              <Button
                component={RouterLink}
                to="/gallery"
                variant="text"
                color="info"
                size="large"
                sx={{ fontWeight: 'bold' }}
              >
                Gallery
              </Button>
              <Button
                component={RouterLink}
                to="/events"
                variant="text"
                color="info"
                size="large"
                sx={{ fontWeight: 'bold' }}
              >
                Events
              </Button>
              <Button
                component={RouterLink}
                to="/blogs"
                variant="text"
                color="info"
                size="large"
                sx={{ fontWeight: 'bold' }}
              >
                Blogs
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button color="primary" variant="contained" size="small" sx={{ fontWeight: 'bold' }} onClick={handleDonateClick}>
                Donate
              </Button>
              <Button color="primary" variant="contained" size="small" sx={{ fontWeight: 'bold' }}>
                Volunteer
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: 'background.default',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  <MenuItem component={RouterLink} to="/" onClick={toggleDrawer(false)}>Home</MenuItem>
                  <MenuItem component={RouterLink} to="/about-us" onClick={toggleDrawer(false)}>About Us</MenuItem>
                  <MenuItem component={RouterLink} to="/gallery" onClick={toggleDrawer(false)}>Gallery</MenuItem>
                  <MenuItem component={RouterLink} to="/events" onClick={toggleDrawer(false)}>Events</MenuItem>
                  <MenuItem component={RouterLink} to="/blogs" onClick={toggleDrawer(false)}>Blogs</MenuItem>
                  <MenuItem>
                    <Button color="primary" variant="contained" fullWidth onClick={handleDonateClick}>
                      Donate
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button color="primary" variant="contained" fullWidth>
                      Volunteer
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

Navbar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
