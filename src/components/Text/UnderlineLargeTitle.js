import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function UnderlineLargeTitle({ text, textColor = Colors.primary_white, textAlign = "left" }) {
    return (
        <Typography variant="h2" fontWeight={800} gutterBottom color={textColor} textAlign={textAlign}
            fontFamily={APPFONT.getFontKeys().fontNameSlabo} style={{ textDecoration: 'underline' }}>
            {text}
        </Typography>)
}
