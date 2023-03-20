import { Typography } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'

export default function LargeParagraph({ text }) {
    return (
        <Typography variant="h6" textAlign={"left"} lineHeight={2}
            style={{ width: '100%' }} gutterBottom fontFamily={APPFONT.getFontKeys().fontNameSlabo}>
            {text}
        </Typography>
    )
}
