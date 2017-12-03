import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';

export default class App extends Component<{}> {
  render() {
    return (
      <Header headerText={'Albums'}/>
    );
  }
}
