import { Grid } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme/colors'
import MediumPaddingLayout from '../layout/mediumPaddingLayout'
import MediumPaddingTopBottom from '../layout/mediumPaddingTopBottom'
import MediumSpacingLayout from '../layout/mediumSpacingLayout'
import NoSpacingLayout from '../layout/NoSpacingLayout'
import MediumTitle from '../Text/MediumTitle'
import SmallTitle from '../Text/SmallTitle'

export default function VVSFooter() {
    return (
        <MediumPaddingLayout bgColor={Colors.primary_black}>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <MediumTitle text={"Téléphone"} />
                    <SmallTitle text={"(+225) 27 22 00 72 03"} />
                    <SmallTitle text={"(+225) (07 58 54 69 80"} />
                    <SmallTitle text={"(+225) 05 55 80 41 84"} />

                </Grid>
                <Grid item xs={12} md={4}>
                    <MediumTitle text={"Courriel"} />
                    <SmallTitle text={"ongvivresansviolence@gmail.com"} />

                </Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>

        </MediumPaddingLayout>
    )
}
