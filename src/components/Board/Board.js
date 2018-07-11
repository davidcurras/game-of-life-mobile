// @flow
import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import Cell from './Cell'
import styles from './Board.style'

type Props = {
  board: Array<Array<number>>,
  isPlaying: boolean,
}

class BoardComponent extends Component<Props> {
  nextStepHandler = () => {
    console.log('Next Step')
  }

  // move steps forward every 1000ms
  playGameHandler = () => {
    console.log('Play Game')
  }

  drawCells = (row, x) => (
    row.map(
      (cell, y) => (
        <Cell key={`c${x}${y}`} x={x} y={y} value={cell} />
      ),
    )
  )

  drawRows = () => {
    const { board } = this.props
    return board.map(
      (row, x) => (
        <View key={`r${x}`}>
          { this.drawCells(row, x) }
        </View>
      ),
    )
  }

  render = () => {
    const { isPlaying } = this.props
    return (
      <View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>
            Game of Life
          </Text>
        </View>
        <View style={styles.board}>
          {this.drawRows()}
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.nextStepHandler}
          >
            <Text style={styles.buttonText}>
              Next Step!
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.playGameHandler}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {isPlaying ? 'Stop Game!' : 'Start Game!'}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default BoardComponent
