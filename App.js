import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import Wallet from './src/containers/Wallet';
import store from './src/store/store';
import './shim'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Wallet />
      </Provider>
    );
  }
}
