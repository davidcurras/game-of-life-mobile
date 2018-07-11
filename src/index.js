// @flow
import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import App from './components/App'

const store = configureStore()

class GameOfLife extends PureComponent {
  componentDidMount() {
    StatusBar.setHidden(true)
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default GameOfLife
