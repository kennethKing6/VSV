import * as Yup from 'yup';
import { APP18n } from '../../../i18n/i18n';

export class ContactPage {

    constructor() {
        this.email = null;
        this.surname = null;
        this.name = null
    }

    async validateInputs() {
        const result = {
            nameError: null,
            surnameError: null,
            emailError: null
        }

        if (typeof this.email === 'string' || typeof this.name === 'string' || typeof this.surname === 'string') {
            try {
               await Yup.string().required().validate(this.name)
                result['nameError'] = null
            } catch (err) {
                result['nameError'] = APP18n.translate(APP18n.getKeys().form_input_name_error)

            }
            try {
               await Yup.string().required().validate(this.surname)
                result['surnameError'] = null

            } catch (err) {
                result['surnameError'] = APP18n.translate(APP18n.getKeys().form_input_surname_error)
            }

          
            try {
                await Yup.string().required().email().validate(this.email)
                result['emailError'] = null
            } catch (err) {
                result['emailError'] = APP18n.translate(APP18n.getKeys().form_input_email_error)

            }
        }


        return result
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
}