import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CommonPageHeader from '../components/header/commonPageHeader'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { Phototeque, } from '../model/pagesModel/phototeque/phototeque'
import GaleryHeader from '../components/Galery/GaleryHeader'
import CenterLayout from '../components/layout/centerLayout'
import VVSFooter from '../components/Footer/VVSFooter'
import CenterLayoutPagination from '../components/Pagination/CenterPagination'

export default function Library() {

  const phototeque = useRef(new Phototeque())

  const [carouselList, setCarouselList] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(1)

  useEffect(() => {
    phototeque.current.getPhotos(page).then((result) => {

      const { carousel, pageSize } = result
      setCarouselList(carousel)
      setPageSize(pageSize)

    }).catch((err) => console.error(err))

  }, [page])




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

      <CenterLayoutPagination onSelectedPage={(value) => setPage(value)} pageSize={pageSize} />

      <VVSFooter />
    </>
  )
}
