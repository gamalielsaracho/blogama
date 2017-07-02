import { FETCH_POSTS, FETCH_POST } from '../actions/posts'

const initialState = { // estado inicial de este modulo de los posts.
  list:[],
  activePost: {
      'title':'',
      'namefolder':'',
      'themes':[],
      'content':'',
      'description':'',
      'cover_icon':'',
      'author':{
        'name':'',
        'email':''
      },
      'tags':[],
      'date':'',
      'image_facebook':'',
      'image_twitter':'',
      'image_google':''
  }
}

export default function PostsReducer(state = initialState, action) {
  // El segun sea. plock.!
  switch(action.type) {

		// Modifica el state segun la accion.
    case FETCH_POSTS:
		  return Object.assign({}, state, { 
        list:action.payload.publications 
      })
    
    case FETCH_POST:
      return Object.assign({}, state, {
          activePost: {
            'title':action.payload.title,
            'namefolder':action.payload.namefolder,
            'themes':action.payload.themes,
            'content':action.payload.content,
            'description':action.payload.description,
            'cover_icon':action.payload.cover_icon,
            'author':{
              'name':action.payload.author.name,
              'email':action.payload.author.email
            },
            'tags':action.payload.tags,
            'date':action.payload.date,
            'image_facebook':action.payload.image_facebook,
            'image_twitter':action.payload.image_twitter,
            'image_google':action.payload.image_google
        }
      })

    default:
			return state
	}
}
