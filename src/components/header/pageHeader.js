import { Grid, Typography, Paper, Box, Button } from '@mui/material'
import React from 'react'
import { ASSETS } from '../../assets/assets'
import { Colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import CTAButton from '../Button/CTAButton'
import MediumPaddingTopBottom from '../layout/mediumPaddingTopBottom'
import MediumSpacingLayout from '../layout/mediumSpacingLayout'
import MediumTopMarginLayout from '../layout/mediumTopMarginLayout'
import NoSpacingLayout from '../layout/NoSpacingLayout'
import SmallSpacingLayout from '../layout/smallSpacingLayout'
import PageNavigation from '../navigation/pageNavigation'

export default function PageHeader() {
    return (
        <MediumSpacingLayout style={styles.container}>
            <PageNavigation />
            <NoSpacingLayout xs={12} >
                <MediumTopMarginLayout>
                    <MediumPaddingTopBottom>
                    <Grid xs={12} md={8} height={300} style={{ backgroundImage: `url(${ASSETS.people_no_bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover', }} ></Grid>

                        <Grid xs={12} md={4} >
                            <Typography variant='h3' gutterBottom style={{ color: Colors.primary_white }}>
                                Briser les barrières, bâtir des passerelles
                            </Typography>
                            <MediumTopMarginLayout><CTAButton text={"Contact Us"} /></MediumTopMarginLayout>
                        </Grid>
                    </MediumPaddingTopBottom>
                </MediumTopMarginLayout>
            </NoSpacingLayout>
        </MediumSpacingLayout>
    )
}

const styles = {
    container: {
        backgroundColor: Colors.primary_purple
    }
}
