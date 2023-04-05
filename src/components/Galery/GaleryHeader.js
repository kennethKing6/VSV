import React from 'react'
import SmallTitle from '../Text/SmallTitle'
import { Colors } from '../../theme/colors'
import { Avatar, Grid } from '@mui/material'
import CommonAvatar from '../Avatar/CommonAvatar'
import MediumTitle from '../Text/MediumTitle'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function GaleryHeader({
    title = "",
    imgList = []
}) {
    const the3Items = imgList.slice(0,3)

    const navigation = useNavigate()

    
    return (
        <>
            <MediumTitle text={title} textColor={Colors.primary_black} />
            <Button variant="primary" style={{backgroundColor:'transparent',borderColor:'transparent'}} 
                onClick={()=>navigation("/libraryDetails",{
                    state:{
                        title:title,
                        imagesList:imgList
                    }
                })}> 
                <Grid container spacing={2} mb={8} sx={{':hover':{opacity:0.6}}}>
                    {the3Items.map((url, index) => {
                        return (
                            <Grid item md={the3Items.length + 1} xs={12} key={`${url}${index}`} >
                                <Avatar src={url} variant='square'
                                    sx={{
                                        height:350,
                                        width: '100%',
                                        objectFit:'contain',
                                    }} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Button>
        </>
    )
}
