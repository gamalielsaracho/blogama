import AppContainer from './app/components/App'
import HomePage from './app/pages/HomePage'

import PostsListPage from './post/pages/PostsListPage'
import ShowPostPage from './post/pages/ShowPostPage'

// allRoutes configuration.
import { fetchPosts } from './post/actions'
import {
	readyApp
} from './app/actions'


const allRoutes = [
	{
		path: '/',
		component: AppContainer,
		exact: true
	}, 
	{
		path:'/blog',
		component: PostsListPage,
		initialAction: () => {
			return fetchPosts()
		}	
	}
]

export default allRoutes


// export default (
//   <Route path='/' component={AppContainer}> // la raiz principal.
//     <IndexRoute component={HomePage}/>
//     <Route path="/blog" component={PostsListPage}/>
//     <Route path="/blog/:namefolder" component={ShowPostPage}/>
//   </Route>
// )

// // console.log('ddd '+process.env.PUBLIC_URL)
