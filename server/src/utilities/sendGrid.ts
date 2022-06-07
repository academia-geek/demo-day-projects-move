import sgMail from '@sendgrid/mail'
import { KEY_SENDGRID, SENDER_EMAIL} from '../application/config/environment'
sgMail.setApiKey(KEY_SENDGRID)

export default async (userEmails: Array<string>, subject: string, name: string, code?: string) => {
  console.log(userEmails);
  
  const msg = {
    to: userEmails, // Change to your recipient
    from: SENDER_EMAIL, // Change to your verified sender
    subject: subject,
    text: 'verified', // Change
    html: `<strong>Hola ${name} su codigo es ${code}</strong>`,
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
