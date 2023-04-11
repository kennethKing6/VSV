import React, { useEffect, useState } from 'react'
import CenterThreeColumnAvatar from '../components/ColumnsAvatar/CenterThreeColumnAvatar'
import CommonPageHeader from '../components/header/commonPageHeader'
import { useLocation } from 'react-router-dom'
import VVSFooter from '../components/Footer/VVSFooter'
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom'
import CommonSEO from '../components/SEO/CommonSEO'

export default function PagesLibrary() {

  const { imagesList } = useLocation().state

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
