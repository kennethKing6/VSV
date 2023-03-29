import { Grid } from '@mui/material'
import React from 'react'

export default function CenterLayout({children,width = '90%'}) {
    return (
        <Grid container columnSpacing={2} style={{ width: width, margin: 'auto' }} >
            {children}
        </Grid>
    )
}
