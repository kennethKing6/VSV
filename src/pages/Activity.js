import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState, } from 'react'
import CardActivity from '../components/Card/CardActivity'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import { ActivityPage } from '../model/pagesModel/activity/activityPage'
import VVSFooter from '../components/Footer/VVSFooter'
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom'
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
            <MediumPaddingTopBottom>
                <CenterLayout>
                    {activities.length > 0 ? activities.map((activity, index) => {
                        const { id, url, caption, description, title, publicationDate } = activity
                        return (
                            <Grid item key={JSON.stringify(activity)} sm={6} md={4} xs={12} mt={2}>
                                <CardActivity caption={caption}
                                    description={description}
                                    imageUrl={url}
                                    title={title}
                                    publishedDate={publicationDate} />
                            </Grid>
                        )
                    }) : <></>}
                </CenterLayout>
            </MediumPaddingTopBottom>
            <VVSFooter/>
        </>
    )
}
