// @flow
import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import type { Board as BoardType } from '../../redux/game/initialState'
import Cell from './Cell'
import styles from './Board.style'

type State = { board: BoardType, isPlaying: Boolean }
type Dispatch = { nextStep: Function, togglePlay: Function, preSet: Function }
type ReduxProps = State & Dispatch
type Props = ReduxProps & {}

const stepTime = 500

class BoardComponent extends Component<Props> {
  componentWillReceiveProps(nextProps) {
    const { nextStep, board } = this.props
    const { isPlaying, board: nextBoard } = nextProps
    if (isPlaying && board && nextBoard !== board) {
      setTimeout(() => nextStep(), stepTime)
    }
  }

  nextStepHandler = (forced) => {
    const { nextStep, isPlaying } = this.props
    if (isPlaying || forced) nextStep()
  }

  // move steps forward every 1000ms
  playGameHandler = () => {
    const { nextStep, togglePlay, isPlaying } = this.props
    if (!isPlaying) nextStep()
    togglePlay()
  }

  preSetHandler = () => {
    const { preSet } = this.props
    preSet()
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
            Game Of Life
          </Text>
        </View>
        <View style={styles.board}>
          {this.drawRows()}
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.nextStepHandler(true)}
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
        <View style={styles.buttons}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.preSetHandler}
          >
            <Text style={styles.buttonText}>
              Pre Set
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default BoardComponent
