import { Link, Grid } from '@mui/material'
import React from 'react'
import { APP18n } from '../../i18n/i18n'
import { Colors } from '../../theme/colors'
import MediumPaddingLayout from '../layout/mediumPaddingLayout'
import SmallSpacingLayout from '../layout/smallSpacingLayout'
import MapboxMap from '../Map/MapboxMap'
import UnderlineMediumTitle from '../Text/UnderlineMediumTitle'
import CommonIconAvatar from '../Avatar/CommonIconAvatar'
import { ASSETS } from '../../assets/assets'
import FacebookIcon from '@mui/icons-material/Facebook';

export default function VVSFooter() {


    return (
        <MediumPaddingLayout bgColor={Colors.primary_black}>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <UnderlineMediumTitle text={APP18n.translate(APP18n.getKeys().footer_telephone)} />
                    <Grid container xs={12} flexDirection={'row'}>
                        <Grid pt={'3.5%'} item><CommonIconAvatar require={ASSETS.PHONE_IC} sx={{ width: 20, height: 20, }} /></Grid>
                        <Grid xs={11} item><SmallSpacingLayout> <Link href="tel:27 22 00 72 03">(+225) 27 22 00 72 03</Link></SmallSpacingLayout></Grid>
                    </Grid>
                    <Grid container xs={12} flexDirection={'row'}>
                        <Grid pt={'3.5%'} item><CommonIconAvatar require={ASSETS.PHONE_IC} sx={{ width: 20, height: 20, }} /></Grid>
                        <Grid xs={11} item><SmallSpacingLayout><Link variant="contained" href="tel:07 58 54 69 80">(+225) 07 58 54 69 80</Link></SmallSpacingLayout></Grid>
                    </Grid>
                    <Grid container xs={12} flexDirection={'row'}>
                        <Grid pt={'3.5%'} item><CommonIconAvatar require={ASSETS.PHONE_IC} sx={{ width: 20, height: 20, }} /></Grid>
                        <Grid xs={11} item><SmallSpacingLayout><Link variant="contained" href="tel:05 55 80 41 84">(+225) 05 55 80 41 84</Link></SmallSpacingLayout></Grid>
                    </Grid>
                    <Grid container xs={12} flexDirection={'row'}>
                        <Grid pt={'3.5%'} item>
                            <FacebookIcon sx={{ width: 30, height: 30, color: Colors.primary_white, cursor: 'pointer' }} 
                                onClick={()=>window.open("https://www.facebook.com/VSV2018/?mibextid=ZbWKwL",'_blank')}/>
                        </Grid>
                        {/* <Grid pt={'3.5%'} item ml={2}>
                            <TwitterIcon onClick={()=>window.open("https://www.twitter.com",'_blank')} sx={{ width: 30, height: 30, color: Colors.primary_white, cursor: 'pointer' }} />
                        </Grid> */}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <UnderlineMediumTitle text={APP18n.translate(APP18n.getKeys().footer_couriel)} />
                    <Grid container xs={12} flexDirection={'row'}>
                        <Grid xs={1} mt={1} mb={1} item><CommonIconAvatar require={ASSETS.EMAIL_IC} sx={{ width: 20, height: 20, }} /></Grid>
                        <Grid xs={11} mt={1} mb={1} item><Link href="mailto:ongvivresansviolence@gmail.com">ongvivresansviolence@gmail.com</Link></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <UnderlineMediumTitle text={APP18n.translate(APP18n.getKeys().footer_siege)} />
                    <MapboxMap />
                </Grid>
            </Grid>

        </MediumPaddingLayout>
    )
}
