import { Grid } from '@mui/material'
import React from 'react'

export default function CenterLayout({children}) {
    return (
        <Grid container columnSpacing={2} style={{ width: '90%', margin: 'auto' }} >
            {children}
        </Grid>
    )
}
