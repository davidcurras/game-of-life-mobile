// @flow
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { rootReducer, globalInitialState } from './modules'

function configureStore() {
  const middleware = [thunk, promiseMiddleware()]
  const enhancer = compose(applyMiddleware(...middleware))
  return createStore(rootReducer, globalInitialState, enhancer)
}

export default configureStore
