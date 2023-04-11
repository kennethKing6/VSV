import React from 'react'
import CommonPageHeader from '../components/header/commonPageHeader'
import VVSFooter from '../components/Footer/VVSFooter'
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom'
import { useLocation } from 'react-router-dom'
import { Colors } from '../theme/colors'
import LargeTitle from '../components/Text/LargeTitle'
import SmallTitle from '../components/Text/SmallTitle'
import { Grid, } from '@mui/material'
import LargeParagraph from '../components/Text/LargeParagraph'
import CommonAvatar from '../components/Avatar/CommonAvatar'

export default function ActivityDetails(props) {
    const { caption, description, imageUrl, publishedDate, title } = useLocation().state

    const descriptions = description.split("\n")

    return (
        <>
            <CommonPageHeader />
            <MediumPaddingTopBottom>
                <Grid style={{ margin: '0 auto', }} sm={8} xs={11}>
                    <LargeTitle text={title} textColor={Colors.primary_black} />
                    {caption ? <SmallTitle text={caption} textColor={Colors.primary_purple} /> : <></>}
                    {imageUrl ? <CommonAvatar url={imageUrl} sx={{
                         objectFit: 'contain',
                        width:{
                            xs:'100%',
                            md:'70%'
                        },
                        height:{
                            xs:'100%'
                        }
                    }} /> : <></>}
                    <Grid mt={2}></Grid>
                    {publishedDate ? <SmallTitle text={publishedDate} textColor={Colors.primary_dark_grey} textTransform='capitalize'/> : <></>}
                    <Grid item mt={2}>
                        {descriptions.map((description, index) => {
                            return (
                                <Grid item mt={1}> <LargeParagraph text={description} key={index} /></Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </MediumPaddingTopBottom>
            <VVSFooter />
        </>
    )
}
