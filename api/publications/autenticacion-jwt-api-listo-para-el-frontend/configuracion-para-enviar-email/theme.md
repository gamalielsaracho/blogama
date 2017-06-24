# Configuración para enviar email a los usuarios

> Bien ahora vamos a pasar a configurar nuestra app para poder enviar email a los usuarios.

# Nosotros le daremos 2 usos cuando enviemos un correo:
1. Para que el usuario pueda recuperar contraseña.
2. Para enviar al usuario un correo de verificación una vez que se registro, para ver si la dirección de correo con el que se registro es del mismo.

# Las librerias que usaremos seran:

> contenido...

> Bien, Ahora creamos dentro de la carpeta config el archivo nodemailer.js con lo siguiente:

login-nodejs/app/config/nodemailer.js {folder-code center}

```javascript
import nodemailer from 'nodemailer'
import config from './config'

let smtpTransport = nodemailer.createTransport("SMTP", {
    service:'Gmail',
    auth: {
        user: config.email.username,
        pass: config.email.password
    }
})

export default {
    sentMailVerificationLink: (user, token) => {
        let textLink = `http://${config.server.host}:${config.server.port}/${config.email.verifyEmailUrl}/${token}`

        let from = `${config.email.accountName} Team< ${config.email.username} >`
        let mailbody = `
            <p> Thanks for Registering on ${config.email.accountName} </p>
            <p>Please verify your email by clicking on the verification link below.<br/>
            <a href=${textLink.toString()}>Verification Link</a></p>
        `
        mail(from, user.email, 'Account Verification', mailbody)
    },
    sentMailForgotPassword: (user) => {
        let from = `${config.email.accountName} Team< ${config.email.username} >`
        let mailbody = `
        <p> you ${config.email.accountName} Account Credential</p>
        <p>email: ${user.email} , password: ${decrypt(user.password)} </p>`
        mail(from, user.email, 'Account password', mailbody)
    }
}

// from => quien envia.
// email => a quien vamos a enviar
// subject => asunto o tema.
// mailbody => todo el mensaje.

function mail(from , email, subject, mailbody) {
	let mailOptions = {
        from: from, // Dirección del remitente.
        to: email, // El que va a recibir el email.
        subject: subject, // Asunto del email.
        html: mailbody  // Contenido del mensaje en html.
    }

    smtpTransport.sendMail(mailOptions, (err, response) => {
    	if(err) {
    		console.log(err)
    	}

    	smtpTransport.close()
    })
}
```
> Contenido....