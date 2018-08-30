import React from 'react';
import { View, FlatList } from 'react-native';
import dayjs from 'dayjs';
import Message from '../Message';
import TypingIndicator from '../TypingIndicator';
import styles from './styles';

type Props = {
  messages: [],
  userId: String,
};

const MessagesList = ({ messages, userId }: Props) => {
  //  search indexes of changing dates. finding out when we should render them

  const changeIndexes = messages.reduce((acc, message, index) => {
    if (index < messages.length - 1) {
      //  if the index isnt last - compare next date and current and put 1/0 depends on result

      const current = dayjs(message.createdAt).format('MMMM D');
      const next = dayjs(messages[index + 1].createdAt).format('MMMM D');
      return current === next ? acc.concat(0) : acc.concat(1);
    }
    // if the index is last - always render the date
    return acc.concat(1);
  }, []);

  const MessageToRender = (item, index) => (
    <Message
      isLast={index === 0}
      userId={userId}
      message={item.message}
      date={
        changeIndexes[index] ? dayjs(item.createdAt).format('MMMM D') : null
      }
      type={item.messageType}
      sender={item._sender.nickname}
      senderId={item._sender.userId}
      time={dayjs(item.createdAt).format('HH:mm')}
    />
  );

  return (
    <View style={styles.chatZone}>
      <FlatList
        inverted
        data={messages}
        renderItem={({ item, index }) => (item === 1 ? <TypingIndicator /> : MessageToRender(item, index))
        }
        keyExtractor={item => `${item.messageId}`}
      />
    </View>
  );
};

export default MessagesList;
