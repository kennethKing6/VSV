import React, { useEffect, useRef, useState } from 'react'
import CommonPageHeader from '../components/header/commonPageHeader'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { Phototeque, } from '../model/pagesModel/phototeque/phototeque'
import GaleryHeader from '../components/Galery/GaleryHeader'
import CenterLayout from '../components/layout/centerLayout'
import VVSFooter from '../components/Footer/VVSFooter'
import CenterLayoutPagination from '../components/Pagination/CenterPagination'
import CommonSEO from '../components/SEO/CommonSEO'

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
      {Array.isArray(carouselList) && carouselList.length > 0 ? <CommonSEO
        title={carouselList[0].title}
        image={carouselList[0].photoList[0]}
        description={carouselList[0].publishedDate} url={`${window.location.origin}/library`} /> : <></>}
      <CommonPageHeader />
      <CenterLayout>
        <MediumTopMarginLayout>

          {carouselList.map((carouselItem) => {
            const { title, photoList, publishedDate } = carouselItem
            return <GaleryHeader title={title} imgList={photoList} publishedDate={publishedDate} />
          })}
        </MediumTopMarginLayout>

      </CenterLayout>

      <CenterLayoutPagination onSelectedPage={(value) => setPage(value)} pageSize={pageSize} />

      <VVSFooter />
    </>
  )
}
