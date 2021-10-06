import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PetsIcon from '@mui/icons-material/Pets';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import HomePage from '../HomePage/HomePage.js';
import Habitats from '../Habitats/Habitats.js';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.35),
  },
  width: '100%',
  height: '80%',
  marginTop: 5,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto',
  },
  marginRight: 10,
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
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function pathChange(path){
  return window.location.replace(´${}´);
}
export default function NavBar() {
    const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                >
                <BottomNavigationAction label="Inicio" icon={<HomeIcon />} onClick={()=>window.location.replace("/")}/>
                <BottomNavigationAction label="Habitats" icon={<OtherHousesIcon />} onClick={()=>window.location.replace("/aboutus")}/>
                <BottomNavigationAction label="Animales" icon={<PetsIcon />} />
                <BottomNavigationAction label="Acerca de" icon={<LocationOnIcon />} />
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 2, display: { xs: 'none', sm: 'block' }, color: 'black', marginTop:'10px'}}
                >
                
                </Typography>

                <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Buscar"
                    inputProps={{ 'aria-label': 'Buscar' }}
                />
                </Search>
            </BottomNavigation>
      </AppBar>
    </Box>
  );
}