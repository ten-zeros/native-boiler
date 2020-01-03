import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import MainView from './Views/MainView';

  
export default class App extends Component {

  constructor(props)
  {
    super(props);
  }
  

  render() {
    return (
      <MainView />
    );
  }
}

