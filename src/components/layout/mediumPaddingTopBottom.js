import { Grid } from '@mui/material'
import React from 'react'
import { SPACING } from '../../theme/spacing'

export default function MediumPaddingTopBottom({ children }) {
    return (
        <Grid container pt={SPACING.md} pb={SPACING.md}>
            {children}
        </Grid>
    )
}
