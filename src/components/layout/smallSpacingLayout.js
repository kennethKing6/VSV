import { Grid } from '@mui/material'
import React from 'react'
import { SPACING } from '../../theme/spacing'

export default function SmallSpacingLayout({children,style}) {
  return (
    <Grid container p={SPACING.sm} style={style}>
        {children}
    </Grid>
  )
}
