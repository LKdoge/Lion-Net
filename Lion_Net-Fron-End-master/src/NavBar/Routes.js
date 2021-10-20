import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Fragment } from 'react';

import PetsIcon from '@mui/icons-material/Pets';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Lion from '../img/Lion.svg';

import { Link } from 'react-router-dom';

export default function Routes(){
    
return (
    <Fragment style={{ marginTop: '20px'}}>
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
    </Fragment>
    )}