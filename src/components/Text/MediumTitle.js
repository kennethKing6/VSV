import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function MediumTitle({ text, 
    textColor = Colors.primary_white,
    fontFamily =  APPFONT.getFontKeys().fontNameLato,
    textTransform = "none"}) {
    return (
        <Typography variant="h3" gutterBottom color={textColor}
            fontFamily={fontFamily} textTransform={textTransform}>
            {text}
        </Typography>)
}
