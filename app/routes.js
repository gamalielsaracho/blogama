import projectRoutes from './project/project.routes'
import postRoutes from './post/post.routes'

export default (app) => {
	projectRoutes(app)
	postRoutes(app)
}