import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { ChatsScene } from '../../navigation/scenes';
import MessagesList from '../../components/MessagesList';
import { sendTextMessage } from '../../redux/chat/actions';
import images from '../../global/images';
import styles from './styles';
import headerStyles from './headerStyles';

type Props = {
  messages: Array,
  userId?: String,
  sendTextMessage: Function,
};

class Chat extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <View style={headerStyles.container}>
        <TouchableOpacity
          style={headerStyles.leftButton}
          onPress={() => navigation.navigate(ChatsScene)}
        >
          <Image style={headerStyles.leftImage} source={images.close_chat} />
        </TouchableOpacity>
        <View style={headerStyles.headerContainer}>
          <Text style={headerStyles.chatName}>
            {navigation.getParam('name', 'Chat')}
          </Text>
          {navigation.getParam('channelType') === 'group' && (
            <Text
              style={
                navigation.getParam('userSeenData').startsWith('Online')
                  ? headerStyles.userOnlineStatus
                  : headerStyles.userSeenStatus
              }
            >
              {navigation.getParam('userSeenData', 'Last seen long time ago')}
            </Text>
          )}
        </View>
        <View style={headerStyles.rightButton}>
          {navigation.state.params.coverUrl !== '' && (
            <Image
              source={{ uri: `${navigation.state.params.coverUrl}` }}
              style={headerStyles.rightImage}
            />
          )}
        </View>
      </View>
    ),
  });

  state = {
    text: '',
  };

  handleSendMessage = () => {
    const { text } = this.state;
    const { sendTextMessage } = this.props;
    sendTextMessage(text);
    this.setState({ text: '' });
  };

  handleChangeText = text => this.setState({ text });

  render() {
    const { text } = this.state;
    const { messages, userId } = this.props;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={65}
      >
        <MessagesList userId={userId} messages={messages} />
        <View style={styles.bottomBar}>
          <TextInput
            value={text}
            onChangeText={this.handleChangeText}
            placeholder="Your message"
            style={styles.messageInput}
          />
          <TouchableOpacity
            onPress={this.handleSendMessage}
            style={styles.sendButton}
          >
            <Image source={images.send} />
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
  ({ user, chat }) => ({
    messages: chat.messages,
    userId: user.user.sbUserId,
  }),
  { sendTextMessage },
)(Chat);
