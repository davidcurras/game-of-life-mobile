// @flow
import { generateEmptyBoard } from '../../helpers/game-of-life'

type Row = Array<number>
export type Board = Array<Row>

export default {
  board: generateEmptyBoard(),
  isPlaying: false,
}
