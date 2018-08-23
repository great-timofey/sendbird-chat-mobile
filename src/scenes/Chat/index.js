import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

type Props = {};

export default class Chat extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.menu}>
            <Image style={styles.menuImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.chatZone}>
          <View style={styles.message}>
            <Text>I am a message</Text>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <TextInput style={styles.messageInput} />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
