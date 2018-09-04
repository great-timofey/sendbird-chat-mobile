import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import ChatInput from '../ChatInput';
import images from '../../global/images';
import styles from './styles';

type Props = {
  handleChooseFileCallback: Function,
  handleTextChangeCallback: Function,
  handleSendCallback: Function,
  fileUploadProgress: Number,
  inputValue: String,
  placeholder: String,
  active: Boolean,
};

export default ({
  handleChooseFileCallback,
  handleTextChangeCallback,
  handleSendCallback,
  fileUploadProgress,
  inputValue,
  placeholder,
  active,
}: Props) => (
  <View style={styles.bottomBar}>
    <TouchableOpacity
      onPress={handleChooseFileCallback}
      style={styles.sendButton}
    >
      <Image source={images.attachement} />
    </TouchableOpacity>
    <ChatInput
      value={inputValue}
      editable={active}
      onChangeText={handleTextChangeCallback}
      placeholder={placeholder}
      style={styles.messageInput}
      progress={fileUploadProgress}
    />
    <TouchableOpacity onPress={handleSendCallback} style={styles.sendButton}>
      <Image source={images.send} />
    </TouchableOpacity>
  </View>
);
