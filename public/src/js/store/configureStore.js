import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import promise from 'redux-promise'

// todos los reductores.
import rootReducer from '../reducers'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// initialState replaced by preloadedState.
export default function configureStore(preloadedState) {
  let store = createStoreWithMiddleware(rootReducer, preloadedState)


  return store
}
