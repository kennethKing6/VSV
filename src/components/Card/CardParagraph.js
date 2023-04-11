import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function CardParagraph({ title, paragraph,
    bgColor = Colors.primary_white, textColor = Colors.primary_white }) {
    return (
        <Grid container sx={{
            height:{
                xs:'100%',
                md:'20vh',
                lg:'100%'
            }
        }}>
            <Card sx={{ minWidth: '80%', backgroundColor: bgColor,height:'100%' }}>
                <CardContent>

                    <Typography variant="h5" component="div" color={textColor}
                        fontFamily={APPFONT.getFontKeys().fontNameLato} textTransform={'capitalize'}>
                        {title}
                    </Typography>

                    <Typography variant="body2" color={textColor}
                        fontFamily={APPFONT.getFontKeys().fontNameMontserrat}>
                        {paragraph}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    )
}
