import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function UnderlineMediumTitle({ 
    text, textColor = Colors.primary_white, 
    textAlign = "left",
    fontFamily = APPFONT.getFontKeys().fontNameLato,
    textTransform = "none" }) {
    return (
        <Typography variant="h4" fontWeight={800} gutterBottom color={textColor} textAlign={textAlign}
            fontFamily={fontFamily} style={{ textDecoration: 'underline' }}
            textTransform={textTransform}>
            {text}
        </Typography>)
}
