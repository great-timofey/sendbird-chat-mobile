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
import colors from '../../global/colors';
import styles from './styles';
import images from '../../global/images';

type Props = {
  messages: Array,
  userId?: String,
};

class Chat extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <View
        style={{
          height: 65,
          paddingTop: 20,
          paddingHorizontal: 5,
          backgroundColor: colors.darkSky,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 2,
          borderColor: colors.darkGreyTransparent,
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate(ChatsScene)}
        >
          <Image
            style={{ height: 20, width: 20, tintColor: colors.darkSkyBlue }}
            source={images.close_chat}
          />
        </TouchableOpacity>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: colors.darkSkyBlue,
              fontWeight: 'bold',
              fontSize: 17,
              marginBottom: 2,
            }}
          >
            {navigation.getParam('chatName', 'Chat')}
          </Text>
          <Text
            style={{
              color: colors.darkGreyTransparent,
              fontSize: 12,
            }}
          >
            Last Seen
          </Text>
        </View>
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
          {navigation.state.params.chatCoverUrl !== '' && (
            <Image
              source={{ uri: `${navigation.state.params.chatCoverUrl}` }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
              }}
            />
          )}
        </View>
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
            <Image style={styles.sendText} source={images.send} />
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
