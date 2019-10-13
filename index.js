import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Firebase Setup
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDB = firebaseApp.database().ref();

AppRegistry.registerComponent(appName, () => App);

export { firebaseApp as fireApp, firebaseDB as fireDB };
