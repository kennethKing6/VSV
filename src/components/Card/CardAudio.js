import { Avatar, Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/PauseCircle';
import { APPFONT } from '../../fonts/font';
import CommonIconAvatar from '../Avatar/CommonIconAvatar';
import { ASSETS } from '../../assets/assets';
export default function CardAudio({
    src = "http://localhost:1337/uploads/sound_6f545e192e.mp3",
    img = "https://images.pexels.com/photos/12730105/pexels-photo-12730105.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgAlt = "green iguana",
    title = "Lizard",
    description = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    caption = "Lizards are a widespread group of squamate reptiles",
    publishedDate = ''

}) {

    const [audioPlay, setAudioPlay] = useState(false)
    const [hasControl, setHasControl] = useState(false)


    const audioRef = useRef()


    return (
        <Card sx={{ display: 'flex', flexDirection: 'row',marginTop:'5%' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" fontFamily={APPFONT.getFontKeys().fontNameLato}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>
                        {caption}
                    </Typography>
                    <Grid container xs={12} mt={1} flexDirection={'row'}>
                        <Grid xs={1} mt={0.5} item><CommonIconAvatar require={ASSETS.CALENDAR_IC} sx={{ width: 15, height: 15, }} /></Grid>
                        <Grid xs={11} item><Typography textTransform={'capitalize'} variant="body2" color="text.secondary" fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>{publishedDate}</Typography> </Grid>
                    </Grid>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                    <CardMedia
                        ref={audioRef}
                        component="audio"
                        sx={{ width: 1 }}
                        onPause={() => {
                            setHasControl(false)
                            setAudioPlay(false)
                        }}
                        controls={hasControl}
                        src={src}
                    />
                    <IconButton aria-label="play/pause" onClick={() => {
                        if (audioPlay === false) {
                            audioRef.current.play()
                            setAudioPlay(!audioPlay)
                            setHasControl(!hasControl)
                        } else {
                            setAudioPlay(!audioPlay)
                            audioRef.current.pause()
                            setHasControl(!hasControl)
                        }
                    }}
                    >
                        {audioPlay ? <PauseIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />}
                    </IconButton>

                </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Avatar
                    style={{ width: '100%', height: '100%', flex: 1 }}
                    variant='square'
                    src={img}
                    alt={imgAlt}
                />
            </Box>

        </Card>
    )
}
