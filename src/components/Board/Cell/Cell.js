// @flow
import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Cell.style'

type Props = { value: number }

class CellComponent extends PureComponent<Props> {
  clickHandler = () => {
    console.log('Toggle alive')
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
