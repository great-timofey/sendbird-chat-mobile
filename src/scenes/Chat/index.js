import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

export default class Chat extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>Hello, I am a chat screen!</Text>
      </View>
    );
  }
}
