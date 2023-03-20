import { Grid, Avatar, Link } from '@mui/material'
import React from 'react'
import { ASSETS } from '../../assets/assets'
import { APP18n } from '../../i18n/i18n'
import { Colors } from '../../theme/colors'
import SmallSpacingLayout from '../layout/smallSpacingLayout'

export default function PageNavigation() {
    return (
        <Grid container >
            <Grid item xs={4} md={2}><Avatar sx={{ bgcolor: Colors.primary_yellow, width: 100, height: 50 }} variant="square" src={ASSETS.logo_svg} /></Grid>
            <Grid item md={10} xs={8} container >
                <SmallSpacingLayout>
                    <Grid item xs={12} sm={1}><Link style={styles.links} href="#" component={"button"} textAlign="left" fontWeight={800} underline="none" >
                        {APP18n.translate(APP18n.getKeys().navigation_libraries)}
                    </Link></Grid>

                    <Grid item xs={12} sm={1}><Link style={styles.links} href="#" component={"button"} textAlign="right" fontWeight={800} underline="none">
                        {APP18n.translate(APP18n.getKeys().navigation_video)}
                    </Link></Grid>

                    <Grid item xs={12} sm={1}><Link style={styles.links} href="#" component={"button"} textAlign="right" fontWeight={800} underline="none">
                        {APP18n.translate(APP18n.getKeys().navigation_audio)}
                    </Link></Grid>

                    <Grid item xs={12} sm={1}><Link style={styles.links} href="#" component={"button"} textAlign="right" fontWeight={800} underline="none">
                    {APP18n.translate(APP18n.getKeys().navigation_activities)}
                    </Link></Grid>
                </SmallSpacingLayout>
            </Grid>
        </Grid>
    )
}

const styles = {
    links: {
        color: Colors.primary_white
    },
    linkLayout: {

    }
}
