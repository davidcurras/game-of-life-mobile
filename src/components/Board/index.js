// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextStep, togglePlay, preSet } from '../../redux/game/actions'
import Board from './Board'

const mapStateToProps = ({ game: { board, isPlaying } }) => ({
  board,
  isPlaying,
})

const mapDispatchToProps = dispatch => ({
  nextStep: bindActionCreators(nextStep, dispatch),
  togglePlay: bindActionCreators(togglePlay, dispatch),
  preSet: bindActionCreators(preSet, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
