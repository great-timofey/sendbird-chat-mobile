import React from 'react';
import {
  View, TouchableOpacity, TextInput, Image,
} from 'react-native';
import ChatInput from '../ChatInput';
import images from '../../global/images';
import styles from './styles';

type Props = {
  handleChooseFileCallback: Function,
  handleTextChangeCallback: Function,
  handleSendCallback: Function,
  inputValue: String,
  placeholder: String,
  progress: Number,
  active: Boolean,
};

export default ({
  handleChooseFileCallback,
  handleTextChangeCallback,
  handleSendCallback,
  inputValue,
  placeholder,
  progress,
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
      progress={0.5}
    />
    <TouchableOpacity onPress={handleSendCallback} style={styles.sendButton}>
      <Image source={images.send} />
    </TouchableOpacity>
  </View>
);
