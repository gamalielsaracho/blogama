// <Switch>
// 				<Route exact path='/blog' component={PostsList}/>
// 				<Route path='/blog/:namefolderPost' component={ShowPost}/>
// 			</Switch>



import PostsList from '../PostsList'

import ShowPost from '../ShowPost'

// allRoutes configuration.
import { fetchPosts, fetchPost } from '../../actions'


const routes = [
	{
		path:'/blog',
		exact: true,
		component: PostsList,
		fetchInitialData: () =>  fetchPosts() 
	},
	{
		path:'/blog/:namefolderPost',
		component: ShowPost,
		fetchInitialData: (paramsUrl) => fetchPost(paramsUrl)
	}
]

export default routes