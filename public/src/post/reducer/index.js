import {
	FETCH_POSTS_REQUEST,
	FETCH_POSTS_SUCCESS,

	FETCH_POST_REQUEST,
	FETCH_POST_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
	fetchPosts: { loading: false, posts:[] },
	fetchPost: { 
		loading: false, 
		post:{
			title:'',
			namefolder:'',
			themes:[],
			content:'',
			description:'',
			cover_icon:'',
			author:{
  				name:'',
  				email:''
			},
			tags:[],
			date:'',
			image_facebook:'',
			image_twitter:'',
			image_google:''
		} 
	}
}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS_REQUEST:
			return Object.assign({}, state, {
				fetchPosts: { loading: true }
			})

		case FETCH_POSTS_SUCCESS:
			// console.log(action.payload.publications)
			return Object.assign({}, state, {
				fetchPosts: { loading: false, posts: action.payload.publications }
			})

		case FETCH_POST_REQUEST:
			return Object.assign({}, state, {
				fetchPost: { loading: true }
			})

		case FETCH_POST_SUCCESS:

			const { title, namefolder, themes, 
				content, description, cover_icon, 
				author, tags, date, image_facebook,
				image_twitter, image_google } = action.payload

			return Object.assign({}, state, {
				fetchPost: { loading: false, 
					post: {
						title: title,
						namefolder: namefolder,
						themes: themes,
						content: content,
						description: description,
						cover_icon: cover_icon,
						author:{
			  				name: author.name,
			  				email: author.email
						},
						tags: tags,
						date: date,
						image_facebook: image_facebook,
						image_twitter: image_twitter,
						image_google: image_google
					}
				}
			})

		default:
			return state
	}
} 