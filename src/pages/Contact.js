import React, { useEffect, useState, useRef } from 'react'
import CommonPageHeader from '../components/header/commonPageHeader'
import CenterLayout from '../components/layout/centerLayout';
import { APP18n } from '../i18n/i18n';
import LargeTitle from '../components/Text/LargeTitle';
import { Colors } from '../theme/colors';
import SmallTitle from '../components/Text/SmallTitle';
import { ContactPage } from '../model/pagesModel/contact/contactPage';
import CommonContactForm from '../components/Form/CommonContactForm';
import VVSFooter from '../components/Footer/VVSFooter';
import MediumPaddingTopBottom from '../components/layout/mediumPaddingTopBottom';
import CommonSEO from '../components/SEO/CommonSEO';
export default function Contact() {



    const contactPage = useRef(new ContactPage())



    const [nameError, setNameError] = useState(null)

    const [surnameError, setSurnameError] = useState(null)

    const [emailError, setEmailError] = useState(null)

    const [isValidating, setIsValidating] = useState(false)

    //Validates input
    useEffect(() => {
        contactPage.current.validateInputs().then((result) => {
            const { nameError, surnameError, emailError } = result
            setEmailError(emailError);
            setSurnameError(surnameError)
            setNameError(nameError)
        }).catch((err) => {
            console.error(err)
        })

    }, [isValidating])





    return (
        <>
            <CommonSEO />
            <CommonPageHeader />
            <MediumPaddingTopBottom>
                <CenterLayout width='80%'>
                    <LargeTitle text={APP18n.translate(APP18n.getKeys().form_title)} textColor={Colors.primary_black} textTransform='capitalize' />
                    <SmallTitle text={APP18n.translate(APP18n.getKeys().form_message)} textColor={Colors.primary_black} />
                    <CommonContactForm
                        onSubmitButton={() => { setIsValidating(Math.random() * Math.random()) }}

                        emailError={emailError}
                        onEmailValue={(value) => contactPage.current.setEmail(value)}

                        nameError={nameError}
                        onNameValue={(value) => contactPage.current.setName(value)}

                        surnameError={surnameError}
                        onSurnameValue={(value) => contactPage.current.setSurname(value)}

                        onLongMessage={(value) => contactPage.current.setMessage(value)}

                        onSubmit={async () => {
                           try{
                            await contactPage.current.sendEmail()
                            alert(APP18n.translate(APP18n.getKeys().form_email_sent_msg))
                           }catch(err){
                            alert(APP18n.translate(APP18n.getKeys().form_email_sent_error))
                           }

                        }}
                    />

                </CenterLayout>
            </MediumPaddingTopBottom>
            <VVSFooter />
        </>
    )
}
