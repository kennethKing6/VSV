import { Grid } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'

export default function MediumPaddingLayout({children,bgColor = Colors.primary_white}) {
  return (
    <Grid container p={SPACING.md} bgcolor={bgColor}>
        {children}
    </Grid>
  )
}
