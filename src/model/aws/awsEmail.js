import AWS from 'aws-sdk';



AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID_ENV,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY_ENV,
    region: process.env.REACT_APP_AWS_REGION_ENV
});

export class AWSEmail {
    constructor() {
        this.ses = new AWS.SES({ apiVersion: '2010-12-01' });

    }

    senEmail(msgObject, callback) {

        const {
            name = 'Nathalie',
            surname = 'Kouakou',
            message = 'Bonjour',
            email = ''
        } = msgObject

        const params = {
            Destination: {
                ToAddresses: [process.env.REACT_APP_EMAIL_SENDER_ENV]
            },
            Message: {
                Body: {
                    Html: {
                        Data: `
                        <p>Le message: ${message}</p>
                         <p>L'email de Madame/Monsieur ${surname} ${name} est ${email}
                        `,
                        Charset: 'UTF-8'
                    }
                },
                Subject: {
                    Data: `Monsieur/Madame ${surname} ${name} vous ecris`,
                    Charset: 'UTF-8'
                }
            },
            Source: process.env.REACT_APP_EMAIL_SENDER_ENV,
        };

        this.ses.sendEmail(params, function (err, data) {
            if (err) {
                console.log(err);
                callback(false)
            } else {
                console.log('Email sent successfully!');
                callback(true)
            }
        });


       

       
    }
}