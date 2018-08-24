import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  message: String,
  type: String,
  sender: String,
  userId: String,
  senderId: String,
};

const Message = ({
  message, type, sender, userId, senderId,
}: Props) => (
  <View
    style={[
      styles.container,
      userId === senderId ? styles.rightSide : styles.leftSide,
    ]}
  >
    <Text style={styles.sender}>{sender}</Text>
    <Text style={styles.message}>
      {type === 'user' ? message : 'User sent a file message'}
    </Text>
  </View>
);

export default Message;
