import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CardAudio from '../components/Card/CardAudio'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { AudioPage } from '../model/pagesModel/audio/audioPage'
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom'
import VVSFooter from '../components/Footer/VVSFooter'
import CommonOutlinePagination from '../components/Pagination/CommonOutlinePagination'
import CenterLayoutPagination from '../components/Pagination/CenterPagination'

export default function Audio() {

    const audio = useRef(new AudioPage())

    const [audios, setAudios] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(1)

    useEffect(() => {
        audio.current.getAudios(pageSize).then((auds) => {

            const { audios, pageSize } = auds

            setAudios(audios)
            setPageSize(pageSize)

        }).catch((err) => {
            throw new Error(err)
        })

    }, [page])

    return (
        <>
            <CommonPageHeader />
            <MediumPaddingTopBottom>
                <CenterLayout>
                    {audios.map((data) => {

                        const { caption, description, image, audioURL, imageURL, title,publishedDate } = data

                        return (
                            <Grid item sm={6} md={4} xs={12}>
                                <CardAudio caption={caption} description={description} img={imageURL} src={audioURL} title={title} publishedDate={publishedDate}/>
                            </Grid>
                        )
                    })}
                </CenterLayout>
            </MediumPaddingTopBottom>
            <CenterLayoutPagination onSelectedPage={(value) => setPage(value)} pageSize={pageSize} />
            <VVSFooter />
        </>)
}
