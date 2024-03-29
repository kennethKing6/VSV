import {  Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import CommonIconAvatar from '../Avatar/CommonIconAvatar'
import { ASSETS } from '../../assets/assets'

export default function CardVideo({
    imageHeight = "250",
    src = "",
    imgAlt = "green iguana",
    title = "",
    description = "",
    caption = "",
    publishedDate = ''

}) {
    
    return (
        <Card sx={{ width: '100%' }}>
            <CardMedia
                component="video"
                alt={imgAlt}
                controls
                height={imageHeight}
                src={src}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" fontFamily={APPFONT.getFontKeys().fontNameLato} component="div">{title}</Typography>
                <Typography variant="body2" fontFamily={APPFONT.getFontKeys().fontNameMontserrat} color="text.secondary">{caption}</Typography>
                <Grid container xs={12} mt={2} flexDirection={'row'}>
                    <Grid xs={1} mt={0.5} item><CommonIconAvatar require={ASSETS.CALENDAR_IC} sx={{ width: 15, height: 15, }} /></Grid>
                    <Grid xs={11} item><Typography textTransform={'capitalize'} variant="body2" color="text.secondary" fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>{publishedDate}</Typography> </Grid>
                </Grid>

            </CardContent>

        </Card>
    )
}
