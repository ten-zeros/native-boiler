import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import AuthView from './Views/AuthView';

  
export default class App extends Component {

  constructor(props)
  {
    super(props);
  }
  

  render() {
    return (
      <AuthView></AuthView>
    );
  }
}

