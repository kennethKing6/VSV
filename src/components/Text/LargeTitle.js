import { Typography } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme/colors'

export default function LargeTitle({text,textColor = Colors.primary_white}) {
    return (
        <Typography variant="h2" gutterBottom color={textColor}>
            {text}
        </Typography>)
}
