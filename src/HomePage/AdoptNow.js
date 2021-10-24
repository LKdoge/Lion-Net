import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MobileStepper from '@mui/material/MobileStepper';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=1600&h=1000&q=60',
        tittle:"Tittle",
        text:"This is a test"
    },
    {
        label: 'Bird',
        imgPath:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=1600&h=1000&q=60',
        tittle:"Tittle",
        text:"This is a test"
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&h=1000&q=80',
        tittle:"Tittle",
        text:"This is a test"
    },
    {
        label: 'Goč, Serbia',
        imgPath:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=1600&h=1000&q=60',
        tittle:"Tittle",
        text:"This is a test"
    },
    ];




export default function AdoptNow() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return(
    <Box sx={{ width: '38%', margin: '0 auto 16px' , float: 'left', height:'450px'  }}>
        <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        >
            {images.map((step, index) => (
                <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                    // Image
                    <Box
                    component="img"
                    sx={{
                        height: '450px',
                        display: 'block',
                        maxWidth: '100vw',
                        width: '100%',
                        overflow: 'hidden',
                        objectFit:'cover',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                    />
                ) : null}
                    <MediaCard tittle={step.tittle} text={step.text} image={step.imgPath}/>
                </div>
            ))}
        </AutoPlaySwipeableViews>
    </Box>
    )
}


function MediaCard({tittle: Tittle, text: Text, image: Image}) {

    return (
        <Card sx={{ 
            width: '90%',
            position: 'absolute',
            transform: "translate( 5%, -125%)"
            }}>
            
        <CardMedia
            component="img"
            height="140"
            image={Image}
            alt="green iguana"
        />
    
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {Tittle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {Text}
            </Typography>
        </CardContent>
    
        <CardActions sx={{justifyContent: 'center'}}>
            <Button sx={{ width: '100%'}} size="small">Adopt Now</Button>
        </CardActions>
        </Card>
    );
    }
