import React from 'react'
import MediumPaddingTopBottom from '../layout/mediumPaddingTopBottom'
import { Grid } from '@mui/material'
import CommonOutlinePagination from './CommonOutlinePagination'

export default function CenterLayoutPagination({
    pageSize = 1,
    onSelectedPage = ()=>{}
}) {
    return (
        <MediumPaddingTopBottom>
            <Grid mx="auto"> <CommonOutlinePagination defaultPage={1} count={pageSize} onSelectedPage={onSelectedPage} /></Grid>
        </MediumPaddingTopBottom>
    )
}
