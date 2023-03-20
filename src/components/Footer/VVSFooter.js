import { Link, Grid } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme/colors'
import MediumPaddingLayout from '../layout/mediumPaddingLayout'
import NoSpacingLayout from '../layout/NoSpacingLayout'
import SmallSpacingLayout from '../layout/smallSpacingLayout'
import MediumTitle from '../Text/MediumTitle'
import SmallTitle from '../Text/SmallTitle'

export default function VVSFooter() {



    return (
        <MediumPaddingLayout bgColor={Colors.primary_black}>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <MediumTitle text={"Téléphone"} />
                    <SmallSpacingLayout> <Link href="tel:27 22 00 72 03">(+225) 27 22 00 72 03</Link></SmallSpacingLayout>
                    <SmallSpacingLayout><Link variant="contained" href="tel:07 58 54 69 80">(+225) 07 58 54 69 80</Link></SmallSpacingLayout>
                    <SmallSpacingLayout><Link variant="contained" href="tel:05 55 80 41 84">(+225) 05 55 80 41 84</Link></SmallSpacingLayout>
                </Grid>
                <Grid item xs={12} md={4}>
                    <MediumTitle text={"Courriel"} />
                    <Link href="mailto:ongvivresansviolence@gmail.com">ongvivresansviolence@gmail.com</Link>
                </Grid>
                <Grid item xs={12} md={4}>
                    <MediumTitle text={"Siège"} />
                    <SmallTitle text={"Bingerville - Palmeraie"} />

                </Grid>
            </Grid>

        </MediumPaddingLayout>
    )
}
