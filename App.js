import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './app/containers/Root';
import store from './app/store/configureStore';

global.Buffer = global.Buffer || require('buffer').Buffer;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
