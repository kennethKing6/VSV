import { Grid, Avatar,Link } from '@mui/material'
import React from 'react'
import { ASSETS } from '../../assets/assets'
import { Colors } from '../../theme/colors'

export default function PageNavigation() {
    return (
        <Grid container >
            <Grid item xs={4} sm={2}><Avatar   sx={{ bgcolor: Colors.primary_yellow,width:100,height:50 }} variant="square" src={ASSETS.logo_svg} /></Grid>
            <Grid item sm={10} xs={8} container >
                <Grid item sm={1}><Link style={styles.links} href="#" component={"button"} underline="none" >Libraries</Link></Grid>
                <Grid item sm={1}><Link style={styles.links}  href="#" component={"button"}  underline="none">Video</Link></Grid>
                <Grid item sm={1}><Link style={styles.links}  href="#" component={"button"}  underline="none">Audio</Link></Grid>
                <Grid item sm={1}><Link style={styles.links}  href="#" component={"button"}  underline="none">Activities</Link></Grid>
                <Grid item sm={8}></Grid>
            </Grid>
        </Grid>
    )
}

const styles ={
    links:{
        color:Colors.primary_white
    },
    linkLayout :{

    }
}
