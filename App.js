import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './app/containers/Root';
import configureStore from './app/store/configureStore';

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
