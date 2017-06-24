import { combineReducers } from 'redux'

import PostsReducer from './reducer_posts'
import ThemesReducer from './reducer_themes'

const rootReducer = combineReducers({
  posts:PostsReducer,
  themes:ThemesReducer
})

export default rootReducer
