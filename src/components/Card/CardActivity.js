import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function CardActivity({
    imageHeight = "250",
    imageUrl = "http://localhost:3000/uploads/small_3q_YD_Ycg_Wr6z_Fd_F_Image_created_with_a_mobile_phone_433e3dc893.jpg",
    imgAlt = "green iguana",
    title = "Lizard",
    description = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    caption = "Lizards are a widespread group of squamate reptiles"

}) {
    return (
        <Card sx={{ width:'100%'}}>
            <CardMedia
                component="img"
                alt={imgAlt}
                height={imageHeight}
                image={imageUrl}
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
