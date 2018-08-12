import projectCtrl from './project.controllers'

export default (app) => {
	app.route('/api/projects')
	   .get(projectCtrl.projects)
}