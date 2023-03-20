import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'

export default function SmallTitle({ text, textColor = Colors.primary_white }) {
    return (
        <Typography variant="h5" gutterBottom color={textColor}
            fontFamily={APPFONT.getFontKeys().fontNameSlabo}>
            {text}
        </Typography>)
}
