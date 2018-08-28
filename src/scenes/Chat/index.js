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
import { currentChannelSelector } from '../../redux/selectors';
import { ChatsScene } from '../../navigation/scenes';
import MessagesList from '../../components/MessagesList';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
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
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => navigation.navigate(ChatsScene)}
      >
        <Text
          style={{
            color: colors.darkSkyBlue,
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          X
        </Text>
      </TouchableOpacity>
    ),
    headerRight: (
      <View
        style={{
          backgroundColor: colors.darkGreyBlueTwo,
          width: 30,
          height: 30,
          borderRadius: 15,
          marginRight: 10,
          marginBottom: 5,
        }}
      >
        <Image
          source={{ uri: `${navigation.state.params.chatCoverUrl || ''}` }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
        />
      </View>
    ),
  });

  render() {
    const { messages, userId } = this.props;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={65}
      >
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

export default connect(({ user, chat }) => ({
  messages: chat.messages,
  userId: user.user.sbUserId,
}))(Chat);
