import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CommonAvatar from '../components/Avatar/CommonAvatar'
import CenterThreeColumnAvatar from '../components/ColumnsAvatar/CenterThreeColumnAvatar'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { Phototeque, } from '../model/pagesModel/phototeque/phototeque'
import { SPACING } from '../theme/spacing'
import { useLocation } from 'react-router-dom'
import VVSFooter from '../components/Footer/VVSFooter'
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom'
import CommonSEO from '../components/SEO/CommonSEO'

export default function PagesLibrary() {

  const { imagesList, title } = useLocation().state

  const [firstList, setFirstList] = useState([])
  const [secondList, setSecondList] = useState([])
  const [thirdList, setThirdList] = useState([])



  useEffect(() => {


    const first = [];
    const second = [];
    const third = []

    for (let i = 0; i < imagesList.length; i = i + 3) {

      if (imagesList[i]) {
        const url = imagesList[i]
        first.push({
          height: 350,
          url: url,
          id: imagesList[i]
        })
      }

      if (imagesList[i + 1]) {
        const url = imagesList[i + 1]
        second.push({
          height: 350,
          url: url,
          id: imagesList[i + 1]
        })
      }
      if (imagesList[i + 2]) {
        const url = imagesList[i + 2]
        third.push({
          height: 350,
          url: url,
          id: imagesList[i + 2]
        })
      }
    }

    setFirstList(first)
    setSecondList(second)
    setThirdList(third)


  }, [])






  return (
    <>
      <CommonSEO />
      <CommonPageHeader />
      <MediumPaddingTopBottom>
        <CenterThreeColumnAvatar firstList={firstList} secondList={secondList} thirdList={thirdList} />
      </MediumPaddingTopBottom>
      <VVSFooter />

    </>
  )
}
