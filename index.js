/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import App from '@common/Router.js'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
