import { Grid } from '@mui/material'
import React from 'react'
import { Form } from 'react-bootstrap'
import { APP18n } from '../../i18n/i18n'
import { SPACING } from '../../theme/spacing'
import CommonSubmitButton from '../Button/CommonSubmitButton'
import CustomInputLabel from '../Input/CustomInputLabel'
import CustomLargeInputLabel from '../Input/CustomLargeInputLabel'

export default function CommonContactForm({
    onNameValue = () => { },
    nameError = '',
    onSurnameValue = () => { },
    surnameError = '',
    onEmailValue = () => { },
    emailError = '',
    onSubmitButton = () => { },
    onLongMessage = () => { },
    onSubmit = () => { }

}) {


    return (
        <>
            <Form style={{ width: '100%', marginTop: SPACING.md }} onSubmit={(event) => {
                event.preventDefault();
                onSubmit()
                event.target.reset();

            }}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <CustomInputLabel label={APP18n.translate(APP18n.getKeys().form_input_name)}
                            placeholder={APP18n.translate(APP18n.getKeys().form_input_name_placeholder)} type="text"
                            onChangeText={(value) => onNameValue(value)}
                            errorMessage={nameError} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <CustomInputLabel label={APP18n.translate(APP18n.getKeys().form_input_surname)}
                            placeholder={APP18n.translate(APP18n.getKeys().form_input_surname_placeholder)} type="text"
                            onChangeText={(value) => onSurnameValue(value)}
                            errorMessage={surnameError} />
                    </Grid>
                </Grid>
                <Grid container mt={SPACING.sm}>
                    <CustomInputLabel label={APP18n.translate(APP18n.getKeys().form_input_email)}
                        placeholder={APP18n.translate(APP18n.getKeys().form_input_email_placeholder)} type="email"
                        onChangeText={(value) => onEmailValue(value)}
                        errorMessage={emailError} />
                </Grid>
                <Grid container mt={SPACING.sm}>
                    <CustomLargeInputLabel label={APP18n.translate(APP18n.getKeys().form_long_msg)}
                        placeholder={APP18n.translate(APP18n.getKeys().form_long_msg_placeholder)} type="text"
                        onChangeText={(value) => onLongMessage(value)}
                    />
                </Grid>
                <Grid container mt={SPACING.sm}>
                    <CommonSubmitButton text={APP18n.translate(APP18n.getKeys().form_button_submit)} disabled={false}
                        onClick={onSubmitButton} 
                        valid={nameError === null && surnameError  === null && emailError  === null }/>
                </Grid>
            </Form>
        </>
    )
}
