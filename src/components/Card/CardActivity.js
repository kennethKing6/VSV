import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { APPFONT } from '../../fonts/font'
import { ASSETS } from '../../assets/assets'
import CommonIconAvatar from '../Avatar/CommonIconAvatar'

export default function CardActivity({
    imageHeight = "250",
    imageUrl = "https://res.cloudinary.com/deh2quz8u/image/upload/v1681210981/logo-bg_c95urf.jpg",
    imgAlt = "green iguana",
    title = null,
    description = null,
    caption = null,
    publishedDate = ""

}) {
    const navigation = useNavigate()
    return (
        <>
            <Card sx={{ width: '100%' }}>
                {imageUrl ? <CardMedia
                    component="img"
                    alt={imgAlt}
                    height={imageHeight}
                    image={imageUrl}
                /> : <></>}
                <CardContent>

                    <Typography gutterBottom variant="h5" noWrap component="div" fontFamily={APPFONT.getFontKeys().fontNameLato} style={{ fontSize: '100%', fontWeight: '900' }}>{title}</Typography>
                    {caption ? <Typography variant="body2" color="text.secondary" fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>{caption}</Typography> :
                        description ? <Typography variant="body2" color="text.secondary" fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>{description.split(".")[0]}</Typography> : <></>}

                    <Grid container xs={12} mt={2} flexDirection={'row'}>
                        <Grid xs={1} mt={0.5} item><CommonIconAvatar require={ASSETS.CALENDAR_IC} sx={{ width: 15, height: 15, }} /></Grid>
                        <Grid xs={11} item><Typography textTransform={'capitalize'} variant="body2" color="text.secondary" fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>{publishedDate}</Typography> </Grid>
                    </Grid>

                </CardContent>
                <CardActions>
                    {description ? <Button fontFamily={APPFONT.getFontKeys().fontNameMontserrat} size="small" onClick={() => navigation("/activityDetails", {
                        state: {
                            title: title,
                            description: description,
                            imageUrl: imageUrl,
                            caption: caption,
                            publishedDate: publishedDate
                        }
                    })}>Voir plus</Button> : <></>}
                </CardActions>
            </Card>
        </>
    )
}
