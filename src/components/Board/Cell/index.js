// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleCell } from '../../../redux/game/actions'
import Cell from './Cell'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  toggleCell: bindActionCreators(toggleCell, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
