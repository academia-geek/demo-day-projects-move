import sgMail from '@sendgrid/mail'
import { KEY_SENDGRID, SENDER_EMAIL } from '../application/config/environment'
sgMail.setApiKey(KEY_SENDGRID)

export default async (userEmails: Array<string>,params: object,templateId: string) => {
  const msj = {
    to: userEmails, //Lista de correos a los que le voy a enviar el email
    from: SENDER_EMAIL, // Email verificado
    templateId: templateId,//Template ID de la plantilla
    dynamic_template_data: params
  }

  console.log(msj)

  sgMail
    .send(msj)
    .then(() => {
        console.log('Email send')
    })
    .catch(error => {

        console.error(error.response.body.errors)
    })
}




/**
 * Este codigo va cuando se le va a enviar el correo al usuario cuando se registre en la plataforma.
 * import generatecode from '../utilities/generatecode'
 * const code = generatecode();

      await sendEmail(
        email,
        {
          subject: 'Validate email',
          name,
          code
        },
        template || templateIds.SEND_CODE
      )
 * 
 */