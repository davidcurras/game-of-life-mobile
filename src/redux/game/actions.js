// @flow
import {
  TOGGLE_CELL,
  NEXT_STEP,
  TOGGLE_PLAY,
  DEFAULT_ACTIVE_BOARD,
} from './constants'

export const toggleCell = (x, y) => ({ type: TOGGLE_CELL, x, y })
export const nextStep = () => ({ type: NEXT_STEP })
export const togglePlay = () => ({ type: TOGGLE_PLAY })
export const setDefaultActiveBoard = () => ({ type: DEFAULT_ACTIVE_BOARD })
