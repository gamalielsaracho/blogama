export default {

	server: {
		host: 'localhost',
		port: process.env.PORT || 5000
	},
	database: {
		host: 'localhost',
		post: 27017,
		db: 'x',
		url: 'mongodb://127.0.0.1:27017/x'
	},
	key: {
		privateKey: 'mysupersecretkey',
		tokenExpiry: '30d'
	}
}