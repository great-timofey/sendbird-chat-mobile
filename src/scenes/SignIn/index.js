import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import Input from '../../components/Input';
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
          <Input type="login" />
          <Input type="password" />
          <Input type="mail" />
        </View>
        <TouchableOpacity style={styles.signButton}>
          <Text style={styles.signText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.toSignUp}>
          <Text style={styles.toSignUpText}>Don’t have an account yet? </Text>
          <TouchableOpacity>
            <Text style={styles.toSignUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
