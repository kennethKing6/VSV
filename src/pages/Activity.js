import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState, } from 'react'
import CardActivity from '../components/Card/CardActivity'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import { ActivityPage } from '../model/pagesModel/activity/activityPage'
import VVSFooter from '../components/Footer/VVSFooter'
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom'
import CenterLayoutPagination from '../components/Pagination/CenterPagination'
import CommonSEO from '../components/SEO/CommonSEO'

export default function Activity() {

    const activity = useRef(new ActivityPage())

    const [activities, setActivies] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(1)

    useEffect(() => {
        activity.current.getActivities(page).then((activities) => {
            const { data, pageSize } = activities
            setActivies(data)
            setPageSize(pageSize)
        }).catch((err) => {
            throw new Error(err)
        })

    }, [page])

    return (
        <>
            {Array.isArray(activities) && activities.length > 0?<CommonSEO 
            title={activities[0].title}
            image={activities[0].url}
            description={activities[0].description} url={`${window.location.origin}/activity`}/>:<></>}
            <CommonPageHeader />
            <MediumPaddingTopBottom>
                <CenterLayout>
                    {activities.length > 0 ? activities.map((activity, index) => {
                        const {  url, caption, description, title, publicationDate } = activity
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

            <CenterLayoutPagination onSelectedPage={(value) => setPage(value)} pageSize={pageSize} />

            <VVSFooter />
        </>
    )
}
