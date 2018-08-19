import projectCtrl from './project.controller'

export default (app) => {
	app.route('/api/projects')
	   .get(projectCtrl.projects)
}