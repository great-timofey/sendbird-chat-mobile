import React from 'react';
import {
  View, TouchableOpacity, TextInput, Image,
} from 'react-native';
import ProgressPie from 'react-native-progress/Pie';
import images from '../../global/images';
import styles from './styles';

type Props = {
  handleChooseFileCallback: Function,
  handleTextChangeCallback: Function,
  handleSendCallback: Function,
  inputValue: String,
  placeholder: String,
  active: Boolean,
};

const ChatBar = ({
  handleChooseFileCallback,
  handleTextChangeCallback,
  handleSendCallback,
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
    <TextInput
      value={inputValue}
      editable={active}
      onChangeText={handleTextChangeCallback}
      placeholder={placeholder}
      style={styles.messageInput}
    />
    {null && (
      <View
        style={{
          position: 'absolute',
          width: 40,
          height: 40,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProgressPie progress={0.5} />
      </View>
    )}
    <TouchableOpacity onPress={handleSendCallback} style={styles.sendButton}>
      <Image source={images.send} />
    </TouchableOpacity>
  </View>
);

export default ChatBar;
