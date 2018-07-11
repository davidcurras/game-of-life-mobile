// @flow
import { LOAD, DONE } from './constants'
import initialState from './initialState'

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        isLoading: true,
      }
    case DONE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default reducer
