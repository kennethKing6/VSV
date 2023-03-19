import { Button } from '@mui/material'
import React from 'react'
import { Colors } from '../../theme/colors'

export default function CTAButton({ text }) {
    return (
        <Button variant="contained" size='large' style={styles.button}>{text}</Button>
    )
}

const styles = {
    button: {
        backgroundColor: Colors.primary_yellow
    }
}
