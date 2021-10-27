import * as React from 'react';
import { useState } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


import CardContainer from "./Card.js";
import { v4 as uuidv4 } from 'uuid';

export const styleTextField = {
    width: '48%',
    height: '40px',
    color: 'black',
    marginTop: '15px',
    marginBottom: '10px',
    marginLeft: '1%',
    marginRight: '1%',
};

export default function Animals() {

    const Status = [
        {
            value: '1',
            label: 'Activo',
        },
        {
            value: '2',
            label: 'Inactivo',
        },
    ];

    const Genres = [
        {
            value: '1',
            label: 'Masculino',
        },
        {
            value: '2',
            label: 'Femenino',
        },
    ];

    const [status, setStatus] = React.useState('Activo');
    const [Genre, setGenre] = React.useState('Masculino');

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeGenero = (event) => {
        setGenre(event.target.value);
    };

    const [animals, setAnimals] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        getAnimals();
    }, []);

    const getAnimals = () => {
        const URL = 'http://localhost:4000/api/getAnimals';
        fetch(URL)
            .then(response => response.json())
            .then(data => setAnimals(data.data));
    }

    // const getHabitat = (id) => {
    //     const URL = `http://localhost:4000/api/getHabitat/${id}`;
    //     fetch(URL)
    //     .then(response => response.json())
    //     .then(data => (data.data));
    // }

    const putAnimales = () => {
        const URL = 'http://localhost:4000/api/addAnimal';

        const Animal = {
            id_animal: uuidv4(),
            name: document.getElementById('Name').value,
            born: document.getElementById('Born').value,
            description: document.getElementById('Description').value,
            origin: document.getElementById('Origen').value,
            id_habitat: document.getElementById('Habitat').value,
            id_blood: document.getElementById('Sangre').value,
            id_genre: status,
            status: Genre
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(Animal),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(URL, options)
            .then(res => res.json())
            .then(res => console.log(res));
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        margin: 'auto',
        bgcolor: 'background.paper',
        p: 4,
    };



    // const styleTextField = {
    // width: '50%',
    // height: '50px',
    // margin: 'auto',
    // color: 'black', 
    // marginTop:'10px',
    // };

    return (
        <>
            <Box sx={{ height: '50px', backgroundColor: '#7F807A', width: '100%' }}>
                <Button sx={{ width: '50%', height: '50px', color: 'black', backgroundColor: '#CCCCC3' }} onClick={handleOpen}>Add one</Button>
                <Button sx={{ width: '50%', height: '50px', color: 'black', backgroundColor: '#7F807A' }} >Hello</Button>
            </Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <Box sx={style}>
                        <Box sx={{ width: '95%', margin: 'auto' }}>
                            <TextField label="Registrar Animal" disabled={true} id="Animal" sx={{ color: 'black', width: '100%' }} />
                            <TextField label="Name" id="Name" sx={styleTextField} />
                            <TextField label="Born" id="Born" sx={styleTextField} />
                            <TextField label="Description" id="Description" multiline sx={styleTextField} />
                            <TextField label="Origen" id="Origen" multiline sx={styleTextField} />
                            <TextField label="Habitat" id="Habitat" sx={styleTextField} />
                            <TextField label="Sangre" id="Sangre" sx={styleTextField} />

                            <TextField
                                select
                                onChange={handleChangeStatus}
                                id="Estatus"
                                label="Estatus"
                                sx={styleTextField}
                                value={status}
                            >
                                {Status.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                select
                                onChange={handleChangeGenero}
                                id="Genero"
                                label="Genero"
                                sx={styleTextField}
                                value={Genre}
                            >
                                {Genres.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button sx={{ width: '80%', height: '50px', color: 'black', marginTop: '10px' }} onClick={() => putAnimales()}>Guardar</Button>
                            <Button sx={{ width: '20%', height: '50px', color: 'black', marginTop: '10px' }} onClick={handleClose}>Cancelar</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

            <Box sx={{ backgroundColor: '#fff4', width: '100%', marginTop: '10px ' }}>
                {animals.map((animal) => {
                    return <CardContainer key={animal.id} id={animal.id} name={animal.name} description={animal.description} born={animal.born}
                        // habitat={getHabitat(animal.id_habitat)} 
                        habitat={animal.id_habitat}
                        blood={animal.id_blood}
                        origin={animal.origin}
                    ></CardContainer>
                })}
            </Box>
        </>
    );
}