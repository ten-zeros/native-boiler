import React, { Component } from 'react';
import MainView from './Views/MainView';
// import LoginView from './Views/LoginView';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// // Different Screens + Their names
// const Navigator = createStackNavigator({
//   Home: {screen: MainView},
//   Profile: {screen: LoginView}
// }, 
// {
//   initialRouteName: 'Home'
// })

// // App container
// const Application = createAppContainer(Navigator);
  
export default class App extends Component {

  constructor(props)
  {
    super(props);
  }
  

  render() {
    return <MainView />;
  }
}

