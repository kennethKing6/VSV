import { Grid } from '@mui/material'
import React from 'react'
import { SPACING } from '../../theme/spacing'

export default function MediumSpacingLayout({children,style}) {
  return (
    <Grid container p={SPACING.md} style={style}>
        {children}
    </Grid>
  )
}
