import { Grid } from '@mui/material'
import React from 'react'

export default function NoSpacingLayout({children}) {
  return (
    <Grid container>
        {children}
    </Grid>
  )
}
