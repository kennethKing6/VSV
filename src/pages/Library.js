import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CommonPageHeader from '../components/header/commonPageHeader'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { Phototeque, } from '../model/pagesModel/phototeque/phototeque'
import GaleryHeader from '../components/Galery/GaleryHeader'
import CenterLayout from '../components/layout/centerLayout'
import VVSFooter from '../components/Footer/VVSFooter'

export default function Library() {

  const phototeque = useRef(new Phototeque())

  const [carouselList, setCarouselList] = useState([])


  useEffect(() => {
    phototeque.current.getPhotos().then((result) => {
      setCarouselList(result)
    }).catch((err) => console.error(err))

  }, [])




  return (
    <>
      <CommonPageHeader />
      <CenterLayout>
        <MediumTopMarginLayout>

          {carouselList.map((carouselItem) => {
            const { title, photoList } = carouselItem
            return <GaleryHeader title={title} imgList={photoList} />
          })}
        </MediumTopMarginLayout>

      </CenterLayout>
      <VVSFooter />
    </>
  )
}
