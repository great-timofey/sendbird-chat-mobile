import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/common/actions';
import store from '../../redux/store';
import SideMenu from '../../components/SideMenu';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  isMenuOpen: Boolean,
};

class Chat extends Component<Props> {
  static navigationOptions = {
    title: 'Chat',
    headerStyle: {
      backgroundColor: colors.white20,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <TouchableOpacity onPress={() => store.dispatch(toggleMenu())}>
        <Text>Hello</Text>
      </TouchableOpacity>
    ),
  };

  const;

  render() {
    const { isMenuOpen } = this.props;
    return (
      <SideMenu isOpen={isMenuOpen}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={65}
        >
          <StatusBar barStyle="light-content" />
          <View style={styles.chatZone}>
            <View style={styles.message}>
              <Text>I am a message</Text>
            </View>
          </View>
          <View style={styles.bottomBar}>
            <TextInput style={styles.messageInput} />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendText}>></Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SideMenu>
    );
  }
}

export default connect(({ common }) => ({ isMenuOpen: common.isMenuOpen }))(
  Chat,
);
