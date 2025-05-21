import dotenv from 'dotenv'
import aws from 'aws-sdk'
import { access } from 'fs'


dotenv.config()

aws.config.update({

    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_TOKEN
})


// export class SendEmail {

//     sendaws(Email: string, message: string) {

//         const sms = new aws.SNS({ apiVersion: "2010-03-31" })
//         const Message = `codigo ${message} requerido pelo usuario`
//         sms.publish({

//             Message,
//             Subject: 'Recuperação de Senha',
//             TargetArn: `arn:aws:sns:us-east-1:631154666177:test_API`,
//             Endpoint: Email,
//             MessageStructure: 'string',

//         }).promise()  
        
//     }
// }
export class SendEmail {

    async sendaws(Email: string, message: string) {
        const sns = new aws.SNS({ apiVersion: "2010-03-31" });

        const Message = `Codigo: ${message} requerido pelo usuário.`;

        try {
            
            const params = {
                Message, 
                Subject: 'Recuperação de Senha',  
                TopicArn: 'arn:aws:sns:us-east-1:631154666177:test_API',
                MessageStructure: 'string', 
            };

            const data = await sns.publish(params).promise();
            console.log('Email sent successfully:', data);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}