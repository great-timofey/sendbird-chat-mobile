import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Picker,
  Image,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/common/actions';
import { enterChannel } from '../../redux/user/actions';
import colors from '../../global/colors';
import styles from './styles';

type Props = {};

class NewChat extends Component<Props> {
  static navigationOptions = {
    title: 'New Chat',
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    type: 'group',
  };

  render() {
    const { type } = this.state;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={65}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Please define new chat parameters</Text>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Type</Text>
            <Picker
              style={[styles.input, styles.typePicker]}
              selectedValue={type}
              onValueChange={itemValue => this.setState({ type: itemValue })}
              itemStyle={styles.typeItem}
            >
              <Picker.Item label="Group" value="group" />
              <Picker.Item label="Open" value="Open" />
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Cover (Optional)</Text>
            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity style={styles.createButton}>
            <Text style={[styles.label, styles.createButtonText]}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(NewChat);
