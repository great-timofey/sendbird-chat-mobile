import React from 'react';
import { View, TextInput } from 'react-native';
import ProgressPie from 'react-native-progress/Pie';
import styles from './styles';

type Props = {
  onChangeText: Function,
  value: String,
  placeholder: String,
  progress: Number,
  editable: Boolean,
};

export default ({
  onChangeText,
  value,
  placeholder,
  progress,
  editable,
}: Props) => (
  <View styles={styles.container}>
    <TextInput
      value={value}
      editable={editable}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.messageInput}
    />
    <View
      style={[
        styles.progress,
        progress > 0 ? { display: 'flex' } : { display: 'none' },
      ]}
    >
      <ProgressPie size={25} progress={progress} />
    </View>
  </View>
);
