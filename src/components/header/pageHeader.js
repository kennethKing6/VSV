import { Grid,  } from '@mui/material'
import React from 'react'
import { useNavigate,  } from 'react-router-dom'
import { ASSETS } from '../../assets/assets'
import { APP18n } from '../../i18n/i18n'
import { Colors } from '../../theme/colors'
import CTAButton from '../Button/CTAButton'
import MediumPaddingTopBottom from '../layout/mediumPaddingTopBottom'
import MediumSpacingLayout from '../layout/mediumSpacingLayout'
import MediumTopMarginLayout from '../layout/mediumTopMarginLayout'
import NoSpacingLayout from '../layout/NoSpacingLayout'
import PageNavigation from '../navigation/pageNavigation'
import LargeTitle from '../Text/LargeTitle'

export default function PageHeader() {
    const navigation = useNavigate()
    return (
        <MediumSpacingLayout style={styles.container}>
            <PageNavigation />
            <NoSpacingLayout xs={12} >
                <MediumTopMarginLayout>
                    <MediumPaddingTopBottom>
                    <Grid xs={12} md={8} height={400} style={{ backgroundImage: `url(${ASSETS.people_no_bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover', }} ></Grid>

                        <Grid xs={12} md={4} >
                            <LargeTitle text={APP18n.translate(APP18n.getKeys().header_slogan)} textTransform="capitalize"/>
                                
                            <MediumTopMarginLayout>
                                <CTAButton text={APP18n.translate(APP18n.getKeys().header_cta)} onClick={()=>navigation("contact")}/>
                                </MediumTopMarginLayout>
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
