import React from 'react'
import Button from 'react-bootstrap/Button';
import { Colors } from '../../theme/colors';
import { SPACING } from '../../theme/spacing';

export default function CommonSubmitButton({
    text,
    disabled = true,
    onClick = ()=>{}
}) {
    return (
        <Button variant="primary"  style={styles.button} disabled={disabled} onClick={onClick}>
            {text}
        </Button>
    )
}

const styles = {
    button:{
        padding:SPACING.xLg,
        width:'40%',
        backgroundColor:Colors.primary_black,
        textTransform:'uppercase'
    }
}
