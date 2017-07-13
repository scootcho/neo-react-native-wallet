import React, { Component } from 'react';
import { walletImport, setBalance } from '../actions/wallet.js';
import { getBalanceWIF } from '../wallet/api.js';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import Balance from './Balance.js'

let input_wif;


class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      pass: ''
    };
  }

  // onWifChange() {
  //   dispatch(Login(this.state.key));
  // }

  initiateGetBalance() {
    Alert.alert('Getting Balance...')
    getBalanceWIF(this.state.key).then(function(result){
      Alert.alert(result)
      dispatch(setBalance(result.ANS, result.ANC));
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width:'90%'}}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            textInputProps={{autoCorrect: false}}
            placeholder="Enter your private key here"
            onChangeText={(key) => this.setState({key})}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            textInputProps={{autoCorrect: false}}
            secureTextEntry={true}
            placeholder="Wallet password"
            onChangeText={(pass) => this.setState({pass})}
          />
          <Button
            color="#58be23"
            title="Get Balance"
            onPress={() => this.initiateGetBalance()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Wallet;

