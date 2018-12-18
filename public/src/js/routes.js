import HomePage from './app/pages/HomePage'

import PostsList from './post/components/PostsList'

import PostsRoutes from './post/components/PostsRoutes'

import ShowPost from './post/components/ShowPost'

// allRoutes configuration.
// import { fetchPosts, fetchPost } from './post/actions'

const routes = [
	{
		path: '/',
		component: HomePage,
		exact: true
	}, 
	{
		path:'/blog',
		exact: true,
		component: PostsRoutes
		// fetchInitialData: () =>  fetchPosts() 
	},
	{
		path:'/blog/:namefolderPost',
		exact: true,
		component: PostsRoutes
		// fetchInitialData: (params) => fetchPost(params)
	}
]

export default routes