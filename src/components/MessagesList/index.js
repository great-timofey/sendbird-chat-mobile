import React from 'react';
import { View, FlatList } from 'react-native';
import dayjs from 'dayjs';
import Message from '../Message';
import styles from './styles';

type Props = {
  messages: [],
  userId: String,
};

const MessagesList = ({ messages, userId }: Props) => (
  <View style={styles.chatZone}>
    <FlatList
      inverted
      data={messages}
      renderItem={({ item, index }) => (
        <Message
          isFirst={index === messages.length - 1}
          userId={userId}
          message={item.message}
          date={dayjs(item.createdAt).format('MMMM D')}
          type={item.messageType}
          sender={item._sender.nickname}
          senderId={item._sender.userId}
          time={dayjs(item.createdAt).format('HH:mm')}
        />
      )}
      keyExtractor={item => `${item.messageId}`}
    />
  </View>
);

export default MessagesList;
