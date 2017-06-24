# Registro de usuario

> Ahora vamos a pasar ha crear la función para que los usuarios de puedan registrar a nuestra aplicación.

# Las librerias que usaremos seran:

> Hacer......

> Tenemos que crear nuestro modelo para poder hacer un esquema de todos los datos del usuario y poder guardarlos en nuestra base datos.

> Para eso dentro de app creamos la carpeta user y dentro creamos el archivo user.model.js con lo siguiente:

login-nodejs/app/user/user.model.js {folder-code center}

```javascript
import mongoose, { Schema } from 'mongoose'
import { db } from '../config/db'
import bcrypt from 'bcrypt-nodejs'


const UserSchema = new Schema({
	email: {
		type: String,
		// será único.
		unique: true,
		// Para que sea requerido. 
		required: true 
	},
	password: {
		type: String,
		required: true
	},
	// Para que el usuario verifique su email
	// despues de registrarse.
	isVerified: {
		type: Boolean,
		// Por defecto será falso.
		default: false
	},
	// Cada usuario tendra un role.
	role: {
		type: String,
		enum: ['Client', 'Manager', 'Admin'],
		default:'Client'
	},
	// El token que será enviado al usuario para recuperar su contraseña.
	resetPasswordToken: {
		type: String
	},
	// La fecha de vencimiento del token(resetPasswordToken) que se le 
	// envio a su email.
	resetPasswordExpires: {
		type: String
	}
})
// FIN BLOQUE UserSchema.


// Exportamos nuestro modelo User para poder usarlo en
// nuestro controllador y poder hacer consultas al modelo User.
export default mongoose.model('User', UserSchema)
```

# Configuración para encriptar la contraseña del usuario.


> Dentro del archivo user.model.js (AGREGAMOS) lo siguiente:

login-nodejs/app/user/user.model.js {folder-code center}

```javascript

// body..
// FIN BLOQUE UserSchema.


```

# Registrando un Usuario.

> Ahora tenemos que crear nuestro controlador, para eso creamos dentro de la carpeta user el archivo user.controller.js con lo siguiente:

login-nodejs/app/user/user.controller.js {folder-code center}

```javascript
import Boom from 'boom'
import Config from '../config/config'
import jwt from 'jsonwebtoken'
import User from './user.model.js'
import crypto from '../config/crypto'
import nodemailer from '../config/nodemailer'


// BLOQUE privateKey
const privateKey = Config.key.privateKey
const tokenExpiry = Config.key.tokenExpiry

exports.register = (req, res) => {

  // Usamos la función encrypt para encriptar el password.
  const passwordEncrypted = crypto.encrypt(req.body.password)

  // Controlamos si ya existe un usuario con ese email.
  User.findOne({ email: req.body.email })
   .then((existingUser) => {
	  if(existingUser) {
	    return res.send(Boom.forbidden('please provide another user email'));
	  }

	  // Creamos una instancia de nuestro modelo User.
	  let user = new User({
	   email: req.body.email,
	   password: passwordEncrypted
      })

	  // Guardamos el usuario.
	  user.save()
	   .then(() => {

	      // Definimos los datos que queremos que estén dentro de token
	      // que se generará.
	      const tokenData = {
		    id: user._id,
		    email: user.email
	      }

		  // Creamos el token, expiresIn es la fecha de vencimiento 
		  // del token. 
		  const token = jwt.sign(tokenData, privateKey, { expiresIn:  tokenExpiry })

		  // Enviamos por email el token que estará en un link
		  // y el usuario tendra que hacer click para confirmar
		  // que se registro a nuestra app.
		  nodemailer.sentMailVerificationLink(user, token)

		  // Retornamos un objeto con el mensaje de confirmación de email
		  // del usuario.
		  return res.send(Boom.forbidden('Please confirm your email id by clicking on link in email'))
	   })
	   .catch((err) => {
		 return res.send(Boom.forbidden(err))
	   })
	})
	.catch((err) => {
		return res.send(Boom.forbidden(err))
	})
}
```