import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import LoginView from './Views/LoginView';

  
export default class App extends Component {

  constructor(props)
  {
    super(props);
  }
  

  render() {
    return (
      <LoginView></LoginView>
    );
  }
}

