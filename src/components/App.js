// @flow
import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styles from './App.style'

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.text}>
          Testing...
        </Text>
      </View>
    )
  }
}
