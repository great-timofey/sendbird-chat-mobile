import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import styles from './styles';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Sign In</Text>
        <View style={styles.form}>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
          <TextInput style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.signButton}>
          <Text style={styles.signText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
