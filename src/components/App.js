// @flow
import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Board from './Board'
import styles from './App.style'

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.app}>
        <Board />
      </View>
    )
  }
}
