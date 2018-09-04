import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { ChatsScene } from '../../navigation/scenes';
import MessagesList from '../../components/MessagesList';
import ChatBar from '../../components/ChatBar';
import {
  sendTextMessage,
  sendFileMessage,
  startTyping,
  endTyping,
} from '../../redux/chat/actions';
import images from '../../global/images';
import styles from './styles';
import headerStyles from './headerStyles';

type Props = {
  messages: Array,
  userId?: String,
  sendTextMessage: Function,
  fileUploadProgress: Number,
  currentChannel: Object,
  startTyping: Function,
  endTyping: Function,
  typers: Array,
  isFileUploading: Boolean,
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
    file: null,
  };

  timer = null;

  handleChangeText = (text) => {
    const { currentChannel, startTyping, endTyping } = this.props;
    this.setState({ text }, () => {
      if (!this.timer) {
        startTyping(currentChannel);
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        endTyping(currentChannel);
        this.timer = null;
      }, 500);
    });
  };

  handleChooseFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((file) => {
      this.setState({
        file,
        text: '',
      });
    });
  };

  handleSendMessage = () => {
    const { text, file } = this.state;
    const { sendTextMessage, sendFileMessage } = this.props;
    if (file) {
      console.log(this.state);
      sendFileMessage(file);
      this.setState({ file: null });
    } else if (text.length > 0) {
      sendTextMessage(text);
      this.setState({ text: '' });
    } else {
      console.log('you cannot send empty message');
    }
  };

  areTypersActive = typers => typers.length > 0;

  render() {
    const { text, file } = this.state;
    const {
      messages,
      userId,
      typers,
      isFileUploading,
      fileUploadProgress,
    } = this.props;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={65}
      >
        <MessagesList
          showTypingIndicator={this.areTypersActive(typers)}
          userId={userId}
          messages={messages}
        />
        <ChatBar
          handleChooseFileCallback={this.handleChooseFile}
          handleSendCallback={this.handleSendMessage}
          handleTextChangeCallback={this.handleChangeText}
          inputValue={text}
          active={!file}
          fileUploadProgress={isFileUploading ? fileUploadProgress : 0}
          placeholder={file ? 'Press button to send photo' : 'Your message'}
        />
      </KeyboardAvoidingView>
    );
  }
}

Chat.defaultProps = {
  userId: '',
};

export default connect(
  ({ user, chat }) => ({
    currentChannel: user.currentChannel,
    messages: chat.messages,
    userId: user.user.sbUserId,
    typers: chat.typers,
    isFileUploading: chat.isFileUploading,
    fileUploadProgress: chat.fileUploadProgress,
  }),
  {
    sendTextMessage,
    sendFileMessage,
    startTyping,
    endTyping,
  },
)(Chat);
