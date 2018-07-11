// @flow
import { applyRandomLifeform } from './lifeforms'

const generateEmptyRow = (length = 10) => Array(length).fill(0)

export const generateEmptyBoard = (length = 10) => {
  const board = generateEmptyRow(length)
  for (let i = 0; i < board.length; i += 1) {
    board[i] = generateEmptyRow(length)
  }
  return board
}

const toggleInRow = (y, row) => row.map((cell, j) => {
  if (y === j) return cell ? 0 : 1
  return cell
})

export const toggleInBoard = (x, y, board) => board.map((row, i) => {
  if (x === i) return toggleInRow(y, row)
  return row
})

const isAlive = (cell, i, j, board) => {
  let count = 0
  count += (board[i - 1] && board[i - 1][j - 1]) ? 1 : 0
  count += (board[i - 1] && board[i - 1][j]) ? 1 : 0
  count += (board[i - 1] && board[i - 1][j + 1]) ? 1 : 0
  count += board[i][j - 1] ? 1 : 0
  count += board[i][j + 1] ? 1 : 0
  count += (board[i + 1] && board[i + 1][j - 1]) ? 1 : 0
  count += (board[i + 1] && board[i + 1][j]) ? 1 : 0
  count += (board[i + 1] && board[i + 1][j + 1]) ? 1 : 0
  const turnOn = !cell && count === 3
  const stayOn = cell && (count === 2 || count === 3)
  return turnOn || stayOn
}

export const getNextBoard = (board) => {
  const nextBoard = generateEmptyBoard(board.length)
  board.forEach((row, i) => row.forEach((cell, j) => {
    if (isAlive(cell, i, j, board)) {
      nextBoard[i][j] = 1
    }
  }))
  return nextBoard
}

export const preSet = () => {
  const nextBoard = generateEmptyBoard()
  return applyRandomLifeform(nextBoard)
}
