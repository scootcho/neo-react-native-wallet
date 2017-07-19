import React from 'react';
import { getBalance } from '../util/api.js';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      pass: '',
      ANS: '',
      ANC: ''
    };
  }

  componentDidMount() {
    console.log('CRNA Mounted')
  }

  initiateGetBalance() {
    console.log('hello from getbalance')
    console.log(this.state.key)
    console.log('hello from getbalance')
    getBalance("TestNet", this.state.key)
      .then(result => {
        console.log('result')
        console.log(result)
        this.setState({ ANS: result.ANS.balance, ANC: result.ANC.balance })
      })
      .catch(err => {
        console.log('err')
        console.log(err)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputField}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            textInputProps={{autoCorrect: false}}
            placeholder="Enter your private key here"
            onChangeText={(key) => this.setState({key})}
          />
          <Button
            color="#58be23"
            title="Get Balance"
            onPress={() => this.initiateGetBalance()}
          />
        </View>
          <Text className="asset">AntShares:</Text><Text className="amount">{ this.state.ANS }</Text>
          <Text className="asset">AntCoins:</Text><Text className="amount">{ this.state.ANC }</Text>
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
  inputField: {
    width:'90%'
  }
});