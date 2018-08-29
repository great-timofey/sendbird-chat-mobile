import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  message: String,
  type: String,
  sender: String,
  userId: String,
  senderId: String,
  date: String,
  time: String,
  index: String,
};

const Message = ({
  message,
  type,
  sender,
  userId,
  senderId,
  date,
  time,
  isFirst,
}: Props) => {
  const isOwner = userId === senderId;
  return (
    <View style={[styles.container, isFirst ? { marginTop: 40 } : {}]}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
      <View
        style={[
          styles.messageContainer,
          isOwner ? styles.rightSide : styles.leftSide,
        ]}
      >
        <Text style={[styles.header, isOwner ? styles.owner : styles.notOwner]}>
          {sender}
        </Text>
        <Text
          style={[styles.message, isOwner ? styles.owner : styles.notOwner]}
        >
          {type === 'user' ? message : 'User sent a file message'}
        </Text>
        <Text style={[styles.time, isOwner ? styles.owner : {}]}>{time}</Text>
      </View>
    </View>
  );
};

export default Message;
