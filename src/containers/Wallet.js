import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Balance from '../components/Balance';
import * as actionCreators from '../actions'


class Wallet extends Component {
  render() {
    return (
      <Balance>
        {this.props.children}
      </Balance>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.account,
    generateWallet: state.generateWallet,
    wallet: state.wallet,
    transactionState: state.transactionState,
  }
}

function mapDispatchToProps(dispatch) {
  return { walletActions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
