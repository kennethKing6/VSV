import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CardVideo from '../components/Card/CardVideo'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import { VideoPage } from '../model/pagesModel/video/activityPage'
import VVSFooter from '../components/Footer/VVSFooter'
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom'
import CenterLayoutPagination from '../components/Pagination/CenterPagination'
import CommonSEO from '../components/SEO/CommonSEO'

export default function Video() {

    const videoPage = useRef(new VideoPage())

    const [videos, setVideos] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(1)

    useEffect(() => {

        videoPage.current.getVideos(page).then((videosObject) => {
            const { videos, pageSize } = videosObject

            setVideos(videos)
            setPageSize(pageSize)


        }).catch((err) => {
            throw new Error(err)
        })

    }, [page])

    return (
        <>
            <CommonSEO />
            <CommonPageHeader />
            <MediumPaddingTopBottom>
                <CenterLayout>
                    {videos.map((video) => {
                        const { caption, url, title, description, publishedDate } = video
                        return (<Grid item sm={6} md={4} xs={12}><CardVideo caption={caption}
                            src={url} title={title} description={description} publishedDate={publishedDate} /></Grid>)
                    })}
                </CenterLayout>
            </MediumPaddingTopBottom>
            <CenterLayoutPagination onSelectedPage={(value) => setPage(value)} pageSize={pageSize} />

            <VVSFooter />
        </>
    )
}
