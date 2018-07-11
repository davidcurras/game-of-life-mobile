// @flow
import { combineReducers } from 'redux'
import ui from './ui/reducer'
import uiIS from './ui/initialState'

const reducers = { ui }

// Exporting inital states
export const globalInitialState = {
  ui: uiIS,
}

export const rootReducer = combineReducers(reducers)
