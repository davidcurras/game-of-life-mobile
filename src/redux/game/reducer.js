// @flow
import {
  TOGGLE_CELL,
  NEXT_STEP,
  TOGGLE_PLAY,
  PRESET,
} from './constants'
import initialState from './initialState'
import {
  toggleInBoard,
  getNextBoard,
  preSet,
} from '../../helpers/game-of-life'

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CELL:
      return {
        ...state,
        board: toggleInBoard(action.x, action.y, state.board),
      }
    case NEXT_STEP:
      return {
        ...state,
        board: getNextBoard(state.board),
      }
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }
    case PRESET:
      return {
        ...state,
        board: preSet(),
      }
    default:
      return state
  }
}
