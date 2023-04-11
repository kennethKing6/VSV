import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function UnderlineLargeTitle({ 
    text, 
    textColor = Colors.primary_white, 
    textAlign = "left",
    textTransform = "none" }) {
    
    return (
        <Typography variant="h2" fontWeight={800} gutterBottom color={textColor} textAlign={textAlign}
            fontFamily={APPFONT.getFontKeys().fontNameLato} style={{ textDecoration: 'underline' }}
            textTransform={textTransform}>
            {text}
        </Typography>)
}
