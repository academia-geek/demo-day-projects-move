import sgMail from '@sendgrid/mail'
import {templateEmailValidation, templateEmailAdmin} from '../email/template/template'
import { KEY_SENDGRID, SENDER_EMAIL} from '../application/config/environment'
sgMail.setApiKey(KEY_SENDGRID)

export default async (userEmails: Array<string>, subject: string, name: string, other:boolean, code?: string, message?:string) => {
  console.log(userEmails);
  
  const msg = {
    to: userEmails, // Change to your recipient
    from: SENDER_EMAIL, // Change to your verified sender
    subject: subject,
    text: 'verified', // Change
    html: other?templateEmailAdmin(message, name):templateEmailValidation(name, code),
  }
  
  sgMail
    .send(msg)
    .then((response) => {
      console.log("Envie con exito", response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })
}
