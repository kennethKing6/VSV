import { Typography } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme/colors'

export default function UnderlineMediumTitle({text,textColor = Colors.primary_white,style}) {
    return (
        <Typography variant="h3" gutterBottom color={textColor} textAlign="center" style={{textDecoration:'underline'}}>
            {text}
        </Typography>)
}
