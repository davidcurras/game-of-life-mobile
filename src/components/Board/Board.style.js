// @flow
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
  },
  button: {
    padding: 3,
    margin: 3,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
})
