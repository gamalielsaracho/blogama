import { combineReducers } from 'redux'

import postsReducer from '../post/reducer'
import projectsReducer from '../project/reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  projects: projectsReducer
})

export default rootReducer
