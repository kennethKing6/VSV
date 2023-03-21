import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonAvatar from '../components/Avatar/CommonAvatar'
import CenterThreeColumnAvatar from '../components/ColumnsAvatar/CenterThreeColumnAvatar'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout'
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout'
import { SPACING } from '../theme/spacing'

export default function Library() {
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

    const first = [];
    const second = [];
    const third = []

    for (let i = 0; i < array.length; i = i + 3) {

      if (array[i]) first.push(array[i]);
      if (array[i + 1]) second.push(array[i + 1])
      if (array[i + 2]) third.push(array[i + 2])
    }

    setFirstList(first)
    setSecondList(second)
    setThirdList(third)

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
