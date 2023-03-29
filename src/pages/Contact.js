import React, { useEffect, useState, useRef } from 'react'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout';
import MediumTopMarginLayout from '../components/layout/mediumTopMarginLayout';
import { APP18n } from '../i18n/i18n';
import LargeTitle from '../components/Text/LargeTitle';
import { Colors } from '../theme/colors';
import SmallTitle from '../components/Text/SmallTitle';
import { ContactPage } from '../model/pagesModel/contact/contactPage';
import CommonContactForm from '../components/Form/CommonContactForm';

export default function Contact() {


    const contactPage = useRef(new ContactPage())



    const [nameError, setNameError] = useState(null)

    const [surnameError, setSurnameError] = useState(null)

    const [emailError, setEmailError] = useState(null)

    const [isValidating, setIsValidating] = useState(false)
    const [sendEmail, setSendEmail] = useState(false)
    const [responseMessage, setResponseMessage] = useState(false)

    //Validates input
    useEffect(() => {
        contactPage.current.validateInputs().then((result) => {
            const { nameError, surnameError, emailError } = result
            if (nameError === null && surnameError === null && emailError === null) {
                setSendEmail(!sendEmail)
            }
            setEmailError(emailError);
            setSurnameError(surnameError)
            setNameError(nameError)
        }).catch((err) => {
        })

    }, [isValidating])

    //Submit Input
    useEffect(() => {

    }, [sendEmail])

    //Show response message
    useEffect(() => {

    }, [responseMessage])



    return (
        <>
            <CommonPageHeader />
            <MediumTopMarginLayout>
                <CenterLayout width='80%'>
                    <LargeTitle text={APP18n.translate(APP18n.getKeys().form_title)} textColor={Colors.primary_black} />
                    <SmallTitle text={APP18n.translate(APP18n.getKeys().form_message)} textColor={Colors.primary_black} />
                    <CommonContactForm
                        onSubmitButton={() => { setIsValidating(Math.random() * Math.random()) }}

                        emailError={emailError}
                        onEmailValue={(value) => contactPage.current.setEmail(value)}

                        nameError={nameError}
                        onNameValue={(value) => contactPage.current.setName(value)}

                        surnameError={surnameError}
                        onSurnameValue={(value) => contactPage.current.setSurname(value)}
                    />

                </CenterLayout>
            </MediumTopMarginLayout>
        </>
    )
}
