import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/PauseCircle';
export default function CardAudio({
    src = "http://localhost:1337/uploads/sound_6f545e192e.mp3",
    img = "https://images.pexels.com/photos/12730105/pexels-photo-12730105.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    imgAlt = "green iguana",
    title = "Lizard",
    description = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    caption = "Lizards are a widespread group of squamate reptiles"

}) {

    const [audioPlay, setAudioPlay] = useState(false)
    const [hasControl, setHasControl] = useState(false)


    const audioRef = useRef()


    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {caption}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <CardMedia
                        ref={audioRef}
                        component="audio"
                        sx={{ width: 1 }}
                        onPause={()=>{
                            setHasControl(false)
                            setAudioPlay(false)
                        }}
                        controls={hasControl}
                        src={src}
                    />
                    <IconButton aria-label="play/pause" onClick={() => {
                        if(audioPlay === false){
                            audioRef.current.play()
                            setAudioPlay(!audioPlay)
                            setHasControl(!hasControl)
                        }else{
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
