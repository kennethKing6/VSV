import React from 'react'
import { Form } from 'react-bootstrap'
import { Colors } from '../../theme/colors'
import { SPACING } from '../../theme/spacing'

export default function CustomLargeInputLabel({
    label,
    placeholder,
    type = 'text',
    errorMessage = null,
    onChangeText = () => { } }) {

    return (
        <>
            <Form.Label style={{ width: '100%' }}>{label}</Form.Label>
            <Form.Control as={'textarea'}  style={{ width: '100%',height:150, backgroundColor: Colors.primary_grey, padding: SPACING.xLg }}
                type={type} placeholder={placeholder} onChange={(e) => onChangeText(e.target.value)} />
            {errorMessage ? <Form.Text   style={{ color: Colors.primary_red }}>
                {errorMessage}
            </Form.Text> : <></>}
        </>
    )
}
