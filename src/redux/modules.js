// @flow
import { combineReducers } from 'redux'
import game from './game/reducer'
import gameIS from './game/initialState'
import ui from './ui/reducer'
import uiIS from './ui/initialState'

const reducers = { game, ui }

// Exporting inital states
export const globalInitialState = {
  game: gameIS,
  ui: uiIS,
}

export const rootReducer = combineReducers(reducers)
