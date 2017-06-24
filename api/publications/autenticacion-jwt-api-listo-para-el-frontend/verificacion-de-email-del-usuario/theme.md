# Verificación de email del usuario


login-nodejs/app/user/user.controller.js {folder-code center}

```javascript
exports.verifyEmail = (req, res) => {

	const token = req.params.token

	jwt.verify(token, privateKey)
	.then((decoded) => {
		if(decoded == undefined) {
			return res.send(Boom.forbidden('invalid verification link'))
		}

		if(decoded.scope[0] != 'Customer') {
			return res.send(Boom.forbidden('invalid verification link'))
		}

		User.findOne({ _id:decoded._id, email:decoded.email })
		.then((user) => {
			if(user == null) {
				return res.send(Boom.forbidden('invalid verification link'))
			}

			if(user.isVerified == true) {
				return res.send(Boom.forbidden('account is already verified'))
			}

			user.isVerified = true

			user.save()
			.then(() => {
				return res.send(Boom.forbidden('account sucessfully verified'))
			})
			.catch((err) => {
				return res.send(Boom.badImplementation(err))
			})

		})
		.catch((err) => {
			return res.send(Boom.badImplementation(err))
		})
	})
	.catch((err) => {
		console.log(err)
	})
}
```
