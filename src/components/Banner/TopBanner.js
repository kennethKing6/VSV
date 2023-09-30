import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../theme/colors'
import { APIBaseService } from '../../model/api/apiBaseService'
import { API_URL,  } from '../../model/api/Baseurl'

export default function TopBanner() {
 
    const [text, setText] = useState(null)

    useEffect(() => {
        const apiBaseService = new APIBaseService()
        const url = `${API_URL}/prochaine-activites`
        apiBaseService._get(url).then((result) => {
            const { prochaineActivites } = result
            if (prochaineActivites) {
                setText(prochaineActivites)
            }
        })

    }, [])

    return (
        <>
            {text ? <Grid container justifyContent={'center'} alignItems={'center'} p={3} bgcolor={Colors.primary_red}>
                <Typography fontWeight={'900'} color={Colors.primary_white}>{text}</Typography>
            </Grid> : <></>}
        </>
    )
}
