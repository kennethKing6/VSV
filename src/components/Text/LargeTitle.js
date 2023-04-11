import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function LargeTitle({text,
    textColor = Colors.primary_white,
    textTransform = "none"}) {
    return (
        <Typography variant="h2" textTransform={textTransform} fontWeight={800}  gutterBottom color={textColor} 
            fontFamily={APPFONT.getFontKeys().fontNameLato}>
            {text}
        </Typography>)
}
