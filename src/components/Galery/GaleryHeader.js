import React from 'react'
import SmallTitle from '../Text/SmallTitle'
import { Colors } from '../../theme/colors'
import { Avatar, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CommonIconAvatar from '../Avatar/CommonIconAvatar'
import { APPFONT } from '../../fonts/font'
import { ASSETS } from '../../assets/assets'

export default function GaleryHeader({
    title = "",
    imgList = [],
    publishedDate = ''
}) {
    const the3Items = imgList.slice(0, 3)

    const navigation = useNavigate()


    return (
        <>
            <SmallTitle text={title} textColor={Colors.primary_black} textTransform='capitalize'/>
            <Grid container xs={12} flexDirection={'row'} mt={0} mb={3}>
                <Grid xs={0}  mt={0.5} item><CommonIconAvatar require={ASSETS.CALENDAR_IC} sx={{ width: 15, height: 15, }} /></Grid>
                <Grid xs={11} pl={1} item><Typography variant="body2" color="text.secondary" textTransform={'capitalize'} fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>{publishedDate}</Typography> </Grid>
            </Grid>

            <Grid container spacing={2} mb={8} sx={{ ':hover': { opacity: 0.6 },cursor:'pointer' }} onClick={() => navigation("/libraryDetails", {
                state: {
                    title: title,
                    imagesList: imgList
                }
            })}>
                {the3Items.map((url, index) => {
                    return (
                        <Grid item md={the3Items.length + 1} xs={12} key={`${url}${index}`} >
                            <Avatar src={url} variant='square'
                                sx={{
                                    height: 350,
                                    width: '100%',
                                    objectFit: 'contain',
                                }} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
