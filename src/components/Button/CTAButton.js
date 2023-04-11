import { Button } from '@mui/material'
import React from 'react'
import { APPFONT } from '../../fonts/font'
import { Colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'

export default function CTAButton({ text,onClick }) {
    return (
        <Button variant="contained" size='large'
            onClick={onClick}
            style={styles.button}>{text}</Button>
    )
}

const styles = {
    button: {
        backgroundColor: Colors.primary_yellow,
        padding:SPACING.xLg,
        color:Colors.primary_black,
        fontFamily:APPFONT.getFontKeys().fontNameLato
    }
}
