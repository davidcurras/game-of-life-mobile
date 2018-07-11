// @flow
import {
  TOGGLE_CELL,
  NEXT_STEP,
  TOGGLE_PLAY,
  PRESET,
} from './constants'

export const toggleCell = (x, y) => ({ type: TOGGLE_CELL, x, y })
export const nextStep = () => ({ type: NEXT_STEP })
export const togglePlay = () => ({ type: TOGGLE_PLAY })
export const preSet = () => ({ type: PRESET })
