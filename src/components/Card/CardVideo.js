import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function CardVideo({
    imageHeight = "250",
    src = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    imgAlt = "green iguana",
    title = "Lizard",
    description = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    caption = "Lizards are a widespread group of squamate reptiles"

}) {
    return (
        <Card sx={{ width:'100%'}}>
            <CardMedia
                component="video"
                alt={imgAlt}
                controls
                height={imageHeight}
                src={src}
                 
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography variant="body2" color="text.secondary">{caption}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Voir plus</Button>
            </CardActions>
        </Card>
    )
}
