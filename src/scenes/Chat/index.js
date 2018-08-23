import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'

class Chat extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>Hello, I'm a chat screen!</Text>
      </View>
    )
  }
}
