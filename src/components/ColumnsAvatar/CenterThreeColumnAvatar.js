import { Grid } from '@mui/material'
import React from 'react'
import CommonAvatar from '../Avatar/CommonAvatar'
import CenterLayout from '../layout/centerLayout'

export default function CenterThreeColumnAvatar({
    firstList = [],
    secondList = [],
    thirdList = []
}) {

    return (
        <CenterLayout>
            <Grid item xs={12} sm={4} >
                {firstList.map((v) => {
                    const {  url, id } = v
                    console.log('url', url)
                    return (<CommonAvatar sx={styles.item} key={id} url={url} />)
                })}
            </Grid>
            <Grid item xs={12} sm={4}>
                {secondList.map((v) => {
                    const { height, url, id } = v
                    return (<CommonAvatar sx={styles.item} height={height} key={id} url={url} />)
                })}
            </Grid>
            <Grid item xs={12} sm={4}>
                {thirdList.map((v) => {
                    const { height, url, id } = v
                    return (<CommonAvatar sx={styles.item} height={height} key={id} url={url} />)
                })}
            </Grid>
        </CenterLayout>
    )
}

const styles = {
    item: {
        width: '100%',
        height: 'fit-content',
        objectFit: 'contain'
    }
}
