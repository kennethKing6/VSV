import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CardAudio from '../components/Card/CardAudio'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { AudioPage } from '../model/pagesModel/audio/audioPage'

export default function Audio() {

    const audio = useRef(new AudioPage())

    const [audios, setAudios] = useState([])

    useEffect(() => {
        audio.current.getAudios().then((auds) => {
            console.log('auds',auds)
            setAudios(auds)
        }).catch((err) => {
            throw new Error(err)
        })

    }, [])

    return (
        <>
            <CommonPageHeader />
            <MediumTopMarginLayout>
                <CenterLayout>
                    {audios.map((data) => {

                        const { caption, description, image, audioURL, imageURL,title } = data

                        return (
                            <Grid item  sm={6} md={4} xs={12}>
                                <CardAudio caption={caption} description={description} img={imageURL} src={audioURL} title={title} />
                            </Grid>
                        )
                    })}
                </CenterLayout>
            </MediumTopMarginLayout>
        </>)
}
