import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import styles from './styles';
import images from '../../global/images';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    console.log(images.mail);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Sign In</Text>
        <View style={styles.form}>
          <View style={styles.inputSection}>
            <Image source={images.login} style={styles.image} />
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputSection}>
            <Image source={images.mail} style={styles.image} />
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputSection}>
            <Image source={images.password} style={styles.image} />
            <Image source={images.eye} style={[styles.image, styles.eyeImage]} />
            <TextInput style={[styles.input, styles.lastInput]} />
          </View>
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
