import React from 'react';
import { View, FlatList } from 'react-native';
import Message from '../Message';
import colors from '../../global/colors';
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
      renderItem={({ item }) => (
        <Message
          userId={userId}
          message={item.message}
          type={item.messageType}
          sender={item._sender.nickname}
          senderId={item._sender.userId}
        />
      )}
      keyExtractor={item => `${item.messageId}`}
    />
  </View>
);

export default MessagesList;
