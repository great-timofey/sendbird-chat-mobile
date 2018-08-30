import React from 'react';
import { View, FlatList } from 'react-native';
import dayjs from 'dayjs';
import Message from '../Message';
import styles from './styles';

type Props = {
  messages: [],
  userId: String,
};

const MessagesList = ({ messages, userId, areTyping }: Props) => {
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

  const getLastGuestMessage = () => messages.find(message => message._sender.userId !== userId);
  console.log('render');
  console.log(areTyping);

  return (
    <View style={styles.chatZone}>
      <FlatList
        inverted
        data={messages}
        renderItem={({ item, index }) => (
          <Message
            areTyping={areTyping}
            isLast={index === 0}
            userId={userId}
            message={item.message}
            typingIndicationAvailable={item === getLastGuestMessage()}
            date={
              changeIndexes[index]
                ? dayjs(item.createdAt).format('MMMM D')
                : null
            }
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
};

export default MessagesList;
