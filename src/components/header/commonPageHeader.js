import { Grid, Typography, Paper, Box, Button } from '@mui/material'
import React from 'react'
import { ASSETS } from '../../assets/assets'
import { APP18n } from '../../i18n/i18n'
import { Colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'
import CTAButton from '../Button/CTAButton'
import MediumPaddingTopBottom from '../layout/mediumPaddingTopBottom'
import MediumSpacingLayout from '../layout/mediumSpacingLayout'
import MediumTopMarginLayout from '../layout/mediumTopMarginLayout'
import NoSpacingLayout from '../layout/NoSpacingLayout'
import SmallSpacingLayout from '../layout/smallSpacingLayout'
import PageNavigation from '../navigation/pageNavigation'
import LargeTitle from '../Text/LargeTitle'

export default function CommonPageHeader() {
    return (
        <MediumSpacingLayout style={styles.container}>
            <PageNavigation />
        </MediumSpacingLayout>
    )
}

const styles = {
    container: {
        backgroundColor: Colors.primary_purple
    }
}
