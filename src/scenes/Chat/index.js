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
import { enterChannel } from '../../redux/user/actions';
import store from '../../redux/store';
import SideMenu from '../../components/SideMenu';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  isMenuOpen: Boolean,
  enterChannel: Function,
  channels: Array,
};

class Chat extends Component<Props> {
  static navigationOptions = {
    title: 'Chat',
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => store.dispatch(toggleMenu())}
      >
        <Text style={{ color: 'white' }}>Menu</Text>
      </TouchableOpacity>
    ),
  };

  handleChannelEnter = (channelUrl, channelType) => this.props.enterChannel(channelUrl, channelType);

  render() {
    const { isMenuOpen, channels } = this.props;
    return (
      <SideMenu
        channels={channels}
        isOpen={isMenuOpen}
        enterChannelCallback={this.handleChannelEnter}
      >
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

export default connect(
  ({ common, user }) => ({
    isMenuOpen: common.isMenuOpen,
    channels: user.channels,
  }),
  { enterChannel },
)(Chat);
