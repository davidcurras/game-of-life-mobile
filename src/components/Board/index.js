// @flow
import { connect } from 'react-redux'
import Board from './Board'

const mapStateToProps = () => ({
  board: [
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ],
  isPlaying: false,
})

export default connect(mapStateToProps)(Board)
