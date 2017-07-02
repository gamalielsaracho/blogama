import { FETCH_THEME, FETCH_THEME_SUCCESS } from '../actions/themes'

const initialState = {
  // themesList:{ themes:[], loading:false },
  activeTheme:{ 
    'title':'',
    'namefoldertheme':'',
    'namefolderpost':'',
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

export default function ThemesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_THEME:
      return Object.assign({}, state, { 
        activeTheme: {
          'title':action.payload.title,
          'namefoldertheme':action.payload.namefoldertheme,
          'namefolderpost':action.payload.namefolderpost,
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
