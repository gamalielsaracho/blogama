import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

// todos los reductores.
import rootReducer from '../reducers'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState) {
  let store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
