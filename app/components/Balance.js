import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

let Balance = ({ ans, anc }) =>
  <View id="balancePage">
    <View id="balanceList">
      <View><Text className="asset">AntShares:</Text><Text className="amount">{ ans }</Text></View>
      <View><Text className="asset">AntCoins:</Text><Text className="amount">{ anc }</Text></View>
    </View>
  </View>;

export default Balance;


