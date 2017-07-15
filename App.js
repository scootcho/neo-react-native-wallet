import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './app/containers/Root';
import configureStore from './app/store/configureStore';
global.Buffer = global.Buffer || require('buffer').Buffer;

const store = configureStore();


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
