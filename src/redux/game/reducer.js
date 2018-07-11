// @flow
import {
  TOGGLE_CELL,
  NEXT_STEP,
  TOGGLE_PLAY,
  DEFAULT_ACTIVE_BOARD,
} from './constants'
import initialState from './initialState'
import {
  toggleInBoard,
  getNextBoard,
  setDefaultActiveBoard,
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
    case DEFAULT_ACTIVE_BOARD:
      return {
        ...state,
        board: setDefaultActiveBoard(),
      }
    default:
      return state
  }
}
