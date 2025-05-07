import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Modals from '../Modals/Modals'
import './Cards.css'

const Cards = ({ pet }) => {
    const [selectedImage, setSelectedImage] = useState(pet.imgbig);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleThumbnailClick = (img) => {
        setSelectedImage(img);
        setOpen(true);
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    onClick={() => handleThumbnailClick(pet.imgbig)}
                    component="img"
                    height="300"
                    width="300"
                    image={pet.imgbig}
                    alt={pet.nombre}
                />
                <Modals open={open} handleClose={handleClose} image={selectedImage} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pet.nombre}
                    </Typography>
                    <Typography component="div" variant="body2">
                        <div><b>Edad</b>: {pet.edad} | <b>Color</b>: {pet.color}</div>
                        <hr />
                        <div><b>Especie</b>: {pet.especie}</div>
                    </Typography>
                    <div className="img-small-container">
                        <CardMedia className='img-small'
                            component="img"
                            image={pet.img}
                            alt={pet.nombre}
                            onClick={() => handleThumbnailClick(pet.img)}
                        />
                        <CardMedia className='img-small'
                            component="img"
                            image={pet.img2}
                            alt={pet.nombre}
                            onClick={() => handleThumbnailClick(pet.img2)}
                        />
                        <CardMedia className='img-small'
                            component="img"
                            image={pet.img3}
                            alt={pet.nombre}
                            onClick={() => handleThumbnailClick(pet.img3)}
                        />
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Cards