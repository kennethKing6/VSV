import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function SmallTitle({ 
    text, 
    textColor = Colors.primary_white,
    textTransform = "none",
    fontFamily = APPFONT.getFontKeys().fontNameLato }) {
    return (
        <Typography variant="h6" gutterBottom color={textColor}
            fontFamily={fontFamily}
            textTransform={textTransform}>
            {text}
        </Typography>)
}
