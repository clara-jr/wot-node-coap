import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Asset from './components/Asset';

import { Card } from 'react-native-elements'; 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Bat-CoAP
        </Text>
        <Card title="Communicate with your devices using CoAP">
          <Asset />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    marginBottom: 5,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
});
