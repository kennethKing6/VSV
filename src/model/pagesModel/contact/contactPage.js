import * as Yup from 'yup';
import { APP18n } from '../../../i18n/i18n';
import { AWSEmail } from '../../aws/awsEmail';

export class ContactPage {

    constructor() {
        this.email = null;
        this.surname = null;
        this.name = null;
        this.message = '';
        this.result = {
            nameError: null,
            surnameError: null,
            emailError: null
        }

        this.awsEmail = new AWSEmail()

    }

    async validateInputs() {

        if (typeof this.email === 'string' || typeof this.name === 'string' || typeof this.surname === 'string') {
            try {
                await Yup.string().required().validate(this.name)
                this.result['nameError'] = null
            } catch (err) {
                this.result['nameError'] = APP18n.translate(APP18n.getKeys().form_input_name_error)

            }
            try {
                await Yup.string().required().validate(this.surname)
                this.result['surnameError'] = null

            } catch (err) {
                this.result['surnameError'] = APP18n.translate(APP18n.getKeys().form_input_surname_error)
            }


            try {
                await Yup.string().required().email().validate(this.email)
                this.result['emailError'] = null
            } catch (err) {
                this.result['emailError'] = APP18n.translate(APP18n.getKeys().form_input_email_error)

            }
        }


        return this.result
    }

    sendEmail(onSuccess) {

        if (this.email) {
            const params = {
                email:this.email,
                surname:this.surname,
                name:this.name,
                message:this.message
            }
            this.awsEmail.senEmail(params, (result) => {
                onSuccess(result)
                // clear form
                this.email = null;
                this.surname = null;
                this.name = null;
                this.message = '';
                this.result = {
                    nameError: null,
                    surnameError: null,
                    emailError: null
                }
            })
        }
        onSuccess(false)
    }

    setEmail(email) {
        this.email = email
    }
    setSurname(surname) {
        this.surname = surname
    }
    setName(name) {
        this.name = name
    }
    setMessage(message) {
        this.message = message
    }
}