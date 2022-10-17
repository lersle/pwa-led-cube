import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DrawerListItem from './DrawerListItem';

// icons
import InfoIcon from '@mui/icons-material/Info';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TerminalIcon from '@mui/icons-material/Terminal';
import CasinoIcon from '@mui/icons-material/Casino';
import CodeIcon from '@mui/icons-material/Code';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import BFHLogoColored from '../images/logo_bfh_colored.png';
const drawerWidth = 200;

// Define theme settings
const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function MainComp(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MuiAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>

          <Typography variant="h4" sx={{ flex: 1 }}>LED-Cube Interface</Typography>
          <IconButton onClick={() => { setDark(!dark) }}><Brightness4Icon /></IconButton>

          <IconButton href={"https://www.bfh.ch/de/"} target="_blank" rel="noopener">
            <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <DrawerListItem text="Manual" href="/manual" icon={<InfoIcon />} />
          <DrawerListItem text="Manipulate" href="/manipulate" icon={<TerminalIcon />} />
          <DrawerListItem text="Development" href="/development" icon={<CasinoIcon />} />
          <DrawerListItem text="Hardware" href="/hardware" icon={<PermDeviceInformationIcon />} />
          <DrawerListItem text="Software" href="/software" icon={<CodeIcon />} />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

export default MainComp;