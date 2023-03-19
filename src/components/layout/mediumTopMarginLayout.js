import { Grid } from '@mui/material'
import React from 'react'
import { SPACING } from '../../theme/spacing'

export default function MediumTopMarginLayout({ children }) {
  return (
    <Grid pt={SPACING.md} container>
      {children}
    </Grid>
  )
}
