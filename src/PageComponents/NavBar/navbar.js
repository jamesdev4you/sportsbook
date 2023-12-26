import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import '../../navlink.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { MyJoinButton } from '../../styledComponents';
import { MyLoginButton } from '../../styledComponents';
import { Typography } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'My Bets', href: '/mybets' },
  { text: 'Dashboard', href: '/dashboard' },
];

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: '#00499B' }}
    >
      <img src={Logo} alt='yooo' style={{ height: '150px', width: '150px' }} />
      <Divider sx={{ backgroundColor: '#00499B' }} />
      <List
        sx={{
          backgroundColor: '#00499B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >


      
          
<Box sx={{marginTop: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '5px'}}> 
        <MyJoinButton />
        <MyLoginButton />
        </Box>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ color: 'white' }} disablePadding>
            <NavLink
              key={item.href}
              style={{
                fontFamily: 'Birds',
                color: 'white',
                textDecoration: 'none',
                marginRight: 'auto',
                fontSize: '20px',
                padding: '1em',
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
        
      </List>
      
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          backgroundColor: '#00499B',
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: '#00499B',
            marginLeft: { xl: '14.4em', lg: '5em', md: '0em' },
            marginRight: { xl: '14.4em', lg: '5em', md: '0em' },
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Box
            alt='yooo'
            sx={{
              display: { xs: 'block', sm: 'block', md: 'block' },
              height: '5em',
              width: '5em',
              marginLeft: {
                xs: 'auto',
                sm: 'auto',
                md: '0',
                lg: '0',
                xl: '0',
              },
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
              marginLeft: { xl: '2em', lg: '1.3em', md: '3em' },
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                className='menu_link'
                style={{
                  fontFamily: 'Birds',
                  textTransform: 'none',
                }}
                to={item.href}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              marginLeft: 'auto',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <MyLoginButton />
            <MyJoinButton />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ backgroundColor: '#E4DCC0' }}>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#00499B',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}
