import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CommonAvatar from '../components/Avatar/CommonAvatar'
import CenterThreeColumnAvatar from '../components/ColumnsAvatar/CenterThreeColumnAvatar'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { Phototeque, } from '../model/pagesModel/phototeque/phototeque'
import { SPACING } from '../theme/spacing'

export default function Library() {

  const phototeque = useRef(new Phototeque())

  const [firstList, setFirstList] = useState([])
  const [secondList, setSecondList] = useState([])
  const [thirdList, setThirdList] = useState([])


  const array = [
    380,
    280,
    500,
    380,
    600,
    630,
    580,
    260,
    320,
    700,
    800,
    400
  ]

  useEffect(() => {
    phototeque.current.getPhotos().then((result) => {

      const first = [];
      const second = [];
      const third = []

      for (let i = 0; i < result.length; i = i + 3) {

        if (result[i]) {
          const { height, url, id } = result[i]
          first.push({
            height:height,
            url:url,
            id:id
          })
        }

        if (result[i + 1]) {
          const { height, url, id } = result[i + 1]
          second.push({
            height:height,
            url:url,
            id:id
          })
        }
        if (result[i + 2]) {
          const { height, url, id } = result[i + 2]
          third.push({
            height:height,
            url:url,
            id:id
          })
        }
      }

      setFirstList(first)
      setSecondList(second)
      setThirdList(third)

    }).catch((err) => console.error(err))

  }, [])








  return (
    <>
      <CommonPageHeader />
      <MediumTopMarginLayout>
        <CenterThreeColumnAvatar firstList={firstList} secondList={secondList} thirdList={thirdList} />
      </MediumTopMarginLayout>

    </>
  )
}
