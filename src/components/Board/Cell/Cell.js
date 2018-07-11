// @flow
import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Cell.style'

type State = {}
type Dispatch = { toggleCell: Function }
type ReduxProps = State & Dispatch
type Props = ReduxProps & { x: number, y: number, value: number }

class CellComponent extends PureComponent<Props> {
  clickHandler = () => {
    const { toggleCell, x, y } = this.props
    toggleCell(x, y)
  }

  render() {
    const { value } = this.props
    return (
      <TouchableOpacity
        onPress={this.clickHandler}
        style={[styles.cell, value ? styles.alive : null]}
      />
    )
  }
}

export default CellComponent
