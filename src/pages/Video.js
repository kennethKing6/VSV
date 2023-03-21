import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { SPACING } from '../theme/spacing'

export default function Video() {

    return (
        <>
            <CommonPageHeader />
            <MediumTopMarginLayout>
                <CenterLayout>

                </CenterLayout>
            </MediumTopMarginLayout>
        </>
    )
}
