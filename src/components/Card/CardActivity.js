import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardActivity({
    imageHeight = "250",
    imageUrl = null,
    imgAlt = "green iguana",
    title = null,
    description = null,
    caption = null,
    publishedDate = ""

}) {
    const navigation = useNavigate()
    return (
        <Card sx={{ width: '100%' }}>
            {imageUrl ? <CardMedia
                component="img"
                alt={imgAlt}
                height={imageHeight}
                image={imageUrl}
            /> : <></>}
            <CardContent>

                <Typography gutterBottom variant="h5" noWrap component="div" style={{ fontSize: '100%', fontWeight: '900' }}>{title}</Typography>
                {caption ? <Typography variant="body2" color="text.secondary">{caption}</Typography> :
                    description ? <Typography variant="body2" color="text.secondary">{description.split(".")[0]}</Typography> : <></>}

            </CardContent>
            <CardActions>
                {description ? <Button size="small" onClick={() => navigation("/activityDetails", {
                    state:{
                        title: title,
                        description: description,
                        imageUrl: imageUrl,
                        caption: caption,
                        publishedDate: publishedDate
                    }
                })}>Voir plus</Button> : <></>}
            </CardActions>
        </Card>
    )
}
