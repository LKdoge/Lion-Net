import * as React from 'react';
import { Link } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import PetsIcon from '@mui/icons-material/Pets';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
// import { bgcolor } from '@mui/system';
import Lion from '../img/Lion.svg';

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

export default function NavBar({ component : Component }) {
  return (
    <>
      <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem /> }
      sx={{
        mx: 'auto',
        p: 1,
        m: 2,
        textAlign: 'center',
        justifyContent: 'center',
      }}
      >
        <Link to="/">
          <IconButton aria-label="Lion Net" sx={{overflow: 'hidden', height: '45px', width: '45px'}}>
            <Box
              component="img"
              sx={{
                height: '85px',
                width: '85px',
              }}
              src={Lion}
              alt={"Lion Net"}>
            </Box>
          </IconButton>
        </Link>

        <Link to="/">
          <IconButton aria-label="Home" sx={{ color: 'black' }}>
            <HomeIcon />
          </IconButton>
        </Link>

        <Link to="/habitats">
          <IconButton aria-label="Habitats" sx={{ color: 'black' }}>
            <OtherHousesIcon />
          </IconButton>
        </Link>

        <Link to="/animals">
          <IconButton aria-label="Animals" sx={{ color: 'black' }}>
            <PetsIcon />
          </IconButton>
        </Link>

        <Link to="/aboutus">
          <IconButton aria-label="About us" sx={{ color: 'black' }}>
            <InfoIcon />
          </IconButton>
        </Link>

        <Search sx={{ float: 'right' }}>
          
          <SearchIconWrapper>
              <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'Buscar' }}
          />
        </Search>

      </Stack>
      <Component></Component>
    </>
  );
}