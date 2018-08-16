import HomePage from './app/pages/HomePage'

import PostsList from './post/components/PostsList'
import ShowPost from './post/components/ShowPost'

// allRoutes configuration.
import { fetchPosts, fetchPost } from './post/actions'


const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true
	}, 
	{
		path:'/blog',
		exact: true,
		component: PostsList,
		fetchInitialData: () => {
			return fetchPosts()
		}	
	},
	{
		path:'/blog/:namefolderPost',
		component: ShowPost,
		fetchInitialData: (name_folder) => {
			return fetchPost(name_folder)
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
