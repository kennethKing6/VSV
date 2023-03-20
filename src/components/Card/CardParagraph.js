import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function CardParagraph({ title, paragraph,
    bgColor = Colors.primary_white, textColor = Colors.primary_white }) {
    return (
        <Card sx={{ minWidth: '80%', backgroundColor: bgColor }}>
            <CardContent>

                <Typography variant="h5" component="div" color={textColor}
                    fontFamily={APPFONT.getFontKeys().fontNameSlabo}>
                    {title}
                </Typography>

                <Typography variant="body2" color={textColor}
                    fontFamily={APPFONT.getFontKeys().fontNameSlabo}>
                    {paragraph}
                </Typography>
            </CardContent>

        </Card>
    )
}
