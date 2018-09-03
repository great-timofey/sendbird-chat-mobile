import React from 'react';
import { View, TextInput } from 'react-native';
import ProgressPie from 'react-native-progress/Pie';
import styles from './styles';

type Props = {
  handleTextChangeCallback: Function,
  inputValue: String,
  placeholder: String,
  progress: Number,
  active: Boolean,
};

export default ({
  handleTextChangeCallback,
  inputValue,
  placeholder,
  progress,
  active,
}: Props) => (
  <View styles={styles.container}>
    <TextInput
      value={inputValue}
      editable={active}
      onChangeText={handleTextChangeCallback}
      placeholder={placeholder}
      style={styles.messageInput}
    />
    <View style={styles.progress}>
      <ProgressPie progress={progress} />
    </View>
  </View>
);
