import { SECONDARY_API_URL } from "../api/Baseurl"

export class AWSEmail {

    async senEmail(name, surname, message, email) {

        const url = `${SECONDARY_API_URL}/contact-us`

        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                surname: surname,
                message: message,
                email: email
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

    }
}