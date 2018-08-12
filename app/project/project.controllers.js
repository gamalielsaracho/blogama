import projects from './projectsList'


exports.projects = function (req, res) {
	res.json(projects)
}