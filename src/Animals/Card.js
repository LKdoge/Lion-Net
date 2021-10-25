import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';

import { styleTextField } from './Animals.js';
import './card.css'

export default function CardContainer({ id: Id, name: Name, description: Description, key: Key, born: Born, habitat: Habitat, blood: Blood, origin: Origen }) {
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
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const UpdateAnimal = () => {

    const URL = `http://localhost:4000/api/updateAnimal/${Id}`
    const Animal = {
      id_animal: Id,
      name: document.getElementById('Name').value,
      born: document.getElementById('Born').value,
      description: document.getElementById('Description').value,
      origin: document.getElementById('Origen').value,
      id_habitat: document.getElementById('Habitat').value,
      id_blood: document.getElementById('Sangre').value,
      id_genre: Genre,
      status: status
    };

    const options = {
      method: 'PUT',
      body: JSON.stringify(Animal),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(URL, options)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <React.Fragment>
      <Box className="containerCard">

        <Card className="card">
          <Box className="animalNombre">
            {Name}
          </Box>

          <CardMedia
            component="img"
            image='https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=600&h=300&q=60'
            alt="Animalito"
            className='imgAnimal'/>
                      <Box className="animalAge">
            {Born}
          </Box>

          <Box className="animalDescription">
            {Description}
          </Box>

          <Button className="updateAnimal" onClick={handleOpen}>Actualizar</Button>
        </Card>
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
            <Box sx={{ width: '80%', margin: 'auto' }}>
              <TextField label="Name" id="Name" sx={styleTextField} defaultValue={Name} />
              <TextField label="Born" id="Born" sx={styleTextField} defaultValue={Born} />
              <TextField label="Description" id="Description" multiline sx={styleTextField} defaultValue={Description} />
              <TextField label="Origen" id="Origen" multiline sx={styleTextField} defaultValue={Origen} />
              <TextField label="Habitat" id="Habitat" sx={styleTextField} defaultValue={Habitat} />
              <TextField label="Sangre" id="Sangre" sx={styleTextField} defaultValue={Blood} />
              <TextField
                  select
                  onChange={handleChangeStatus}
                  id='Status' 
                  label='Estatus' 
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
                  id='Genero' 
                  label='Genero'
                  sx={styleTextField}
                  value={Genre}
              >
                  {Genres.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                          {option.label}
                      </MenuItem>
                  ))}
              </TextField>   
              <Button sx={{ width: '80%', height: '50px', color: 'black', marginTop: '10px' }} onClick={()=>UpdateAnimal()}>Guardar</Button>
              <Button sx={{ width: '20%', height: '50px', color: 'black', marginTop: '10px' }} onClick={handleClose}>Cancelar</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>

    </React.Fragment>
  )
}

// /* Color Theme Swatches in Hex */
// .Retro-Futurism-1-hex { color: #D90B1C; }
// .Retro-Futurism-2-hex { color: #FAF566; }
// .Retro-Futurism-3-hex { color: #9ACFDD; }
// .Retro-Futurism-4-hex { color: #CABAAB; }
// .Retro-Futurism-5-hex { color: #202731; }