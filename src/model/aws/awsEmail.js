import AWS from 'aws-sdk';
import { APP18n } from '../../i18n/i18n';
import { API_URL } from '../api/Baseurl';



AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID_ENV,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_ENV,
    region: process.env.REACT_APP_AWS_REGION_ENV
});

export class AWSEmail {
    constructor() {
        this.ses = new AWS.SES({ apiVersion: '2010-12-01' });

    }

    async senEmail(name, surname, message, email) {

        const url = API_URL + '/contact-us'

        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "surname": surname,
                "message": message,
                "emailÏ": email
            })
        })

    }
}