import postCtrl from './post.controller'

export default (app) => {
	app.route('/api/posts')
	   .get(postCtrl.posts)

	app.route('/api/posts/:namefolder')
	   .get(postCtrl.post)
}