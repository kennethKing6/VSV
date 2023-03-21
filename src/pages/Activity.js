import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState, } from 'react'
import CardActivity from '../components/Card/CardActivity'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { ActivityPage } from '../model/pagesModel/activity/activityPage'

export default function Activity() {

    const activity = useRef(new ActivityPage())

    const [activities, setActivies] = useState([])

    useEffect(() => {
        activity.current.getActivities().then((activities) => {
            setActivies(activities)

        }).catch((err) => {
            throw new Error(err)
        })

    }, [])

    return (
        <>
            <CommonPageHeader />
            <MediumTopMarginLayout>
                <CenterLayout>
                    {activities.length > 0 ? activities.map((activity, index) => {
                        const { id, url, caption, description, title } = activity
                        return (
                            <Grid item key={id} sm={6} md={4} xs={12}>
                                <CardActivity caption={caption}
                                    description={description}
                                    imageUrl={url}
                                    title={title} />
                            </Grid>
                        )
                    }) : <></>}
                </CenterLayout>
            </MediumTopMarginLayout>
        </>
    )
}
