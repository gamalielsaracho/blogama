import HomePage from './app/pages/HomePage'

import PostsList from './post/components/PostsList'

// allRoutes configuration.
import { fetchPosts } from './post/actions'


const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true
	}, 
	{
		path:'/blog',
		component: PostsList,
		fetchInitialData: () => {
			return fetchPosts()
		}	
	}
]

export default routes


// export default (
//   <Route path='/' component={AppContainer}> // la raiz principal.
//     <IndexRoute component={HomePage}/>
//     <Route path="/blog" component={PostsListPage}/>
//     <Route path="/blog/:namefolder" component={ShowPostPage}/>
//   </Route>
// )

// // console.log('ddd '+process.env.PUBLIC_URL)
