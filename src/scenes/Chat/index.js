import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleMenu } from '../../redux/common/actions';
import MessagesList from '../../components/MessagesList';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  navigation: Object,
  messages: Array,
  userId?: String,
};

class Chat extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('chatName', 'Chat'),
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    // headerLeft: (
    // <TouchableOpacity
    // style={{ marginLeft: 10 }}
    // onPress={() => store.dispatch(toggleMenu())}
    // >
    // <Text style={{ color: 'white' }}>Menu</Text>
    // </TouchableOpacity>
    // ),
  });

  render() {
    const { messages, userId } = this.props;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={65}
      >
        <StatusBar barStyle="light-content" />
        <MessagesList userId={userId} messages={messages} />
        <View style={styles.bottomBar}>
          <TextInput style={styles.messageInput} />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendText}>></Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Chat.defaultProps = {
  userId: '',
};

export default connect(
  ({ common, user, chat }) => ({
    isMenuOpen: common.isMenuOpen,
    messages: chat.messages,
    userId: user.user.sbUserId,
  }),
  { toggleMenu },
)(Chat);
