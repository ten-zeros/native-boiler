import React, { Component } from 'react';
import MainView from './Views/MainView';
import LoginView from './Views/LoginView';


  
export default class App extends Component {

  constructor(props)
  {
    super(props);
  }
  

  render() {
    return <MainView />;
  }
}

