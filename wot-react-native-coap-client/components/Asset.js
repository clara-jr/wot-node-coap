import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Copper = t.struct({
  host: t.String,
  resource: t.String,
  query: t.maybe(t.String)
});

export default class Asset extends Component {
  constructor() {
      super();
      this.state = {
         result: 'Make your CoAP request!'
      }
      this.functionCoap = this.functionCoap.bind(this);
  }
  functionCoap(method) {
    const value = this.form.getValue();
    const host = value.host;
	  const path = value.resource;
	  const query = value.query ? value.query : "";
    const coaprequest = method.concat("_", host, "_", path, "_", query);
    fetch('http://localhost:8080/'+coaprequest).then((response) => response.json()) // change localhost:8080 to your server IP and PORT
    .then((responseJson) => {
      if (responseJson.error != null) {
        this.setState({result: 'Error: ' + responseJson.error});
      } else if (responseJson.data.data != null) {
        this.setState({result: 'Response: ' + String.fromCharCode.apply(String, responseJson.data.data)});
      } else if (responseJson.data != null) {
        this.setState({result: 'Response: ' + responseJson.data});
      } else {
        this.setState({result: 'Error'});
      }
    })
    .catch((error) => {
      console.error(error);
      this.setState({result: 'Error: ' + error});
    });
  }
  handleGet = () => {
    const method = 'GET';
    this.functionCoap(method);
  }
  handlePut = () => {
    const method = 'PUT';
    this.functionCoap(method);
  }
  handlePost = () => {
    const method = 'POST';
    this.functionCoap(method);
  }
  handleDelete = () => {
    const method = 'DELETE';
    this.functionCoap(method);
  }
  render() {
    return (
      <View style={styles.container}>
        <Form type={Copper} ref={(ref) => this.form=ref}/>
        <View style={styles.row}>
          <View style={{width: 50, height: 35}}>
            <Button title="GET" onPress={this.handleGet}/>
          </View>
          <View style={{width: 50, height: 35, marginLeft: 10}}>
            <Button title="PUT" onPress={this.handlePut}/>
          </View>
          <View style={{width: 60, height: 35, marginLeft: 10}}>
            <Button title="POST" onPress={this.handlePost}/>
          </View>
          <View style={{width: 70, height: 35, marginLeft: 10}}>
            <Button title="DELETE" onPress={this.handleDelete}/>
          </View>
        </View>
        <View>
          <Text style={styles.alertOK}>
            {this.state.result}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 330
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20
  },
  alertOK: {
    backgroundColor: '#d9edf7',
    marginBottom: 0,
    borderRadius: 1,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#31708f',
    borderColor: '#bce8f1'
  }
});
