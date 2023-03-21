import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CardVideo from '../components/Card/CardVideo'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { VideoPage } from '../model/pagesModel/video/activityPage'
import { SPACING } from '../theme/spacing'

export default function Video() {

    const videoPage = useRef(new VideoPage())

    const [videos, setVideos] = useState([])

    useEffect(() => {
        videoPage.current.getVideos().then((videos) => {
            setVideos(videos)

        }).catch((err) => {
            throw new Error(err)
        })

    }, [])

    return (
        <>
            <CommonPageHeader />
            <MediumTopMarginLayout>
                <CenterLayout>
                    {videos.map((video) => {
                        const { caption, url, title, description } = video
                        return (<Grid item sm={6} md={4} xs={12}><CardVideo caption={caption}
                            src={url} title={title} description={description} /></Grid>)
                    })}
                </CenterLayout>
            </MediumTopMarginLayout>
        </>
    )
}
