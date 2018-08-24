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
    style={
      userId === senderId
        ? [styles.container, styles.rightSide]
        : [styles.container, styles.leftSide]
    }
  >
    <Text style={styles.sender}>{sender}</Text>
    {type === 'user' ? (
      <Text style={styles.message}>{message}</Text>
    ) : (
      <Text style={styles.message}>User sent a file message</Text>
    )}
  </View>
);

export default Message;
