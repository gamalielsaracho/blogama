import { combineReducers } from 'redux'

import postsReducer from '../post/reducer'
import projectsReducer from '../project/reducer'
import appReducer from '../app/reducer'


const rootReducer = combineReducers({
  posts: postsReducer,
  projects: projectsReducer,
  app: appReducer
})

export default rootReducer
