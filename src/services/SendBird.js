import SendBird from 'sendbird';
import store from '../redux/store';
import { receiveMessage, changeTypingStatus } from '../redux/chat/actions';

const sb = new SendBird({
  appId: '0867B9E8-AC7A-4744-A99F-2420FA273CB0',
});

export const SBconnect = (sbUserId, sbAccessToken) => new Promise((res, rej) => sb.connect(
  sbUserId,
  sbAccessToken,
  (user, error) => {
    if (user) {
      res(user);
    } else {
      rej(error);
    }
  },
));

// CHANNELS STUFF

const getOpenChannels = () => new Promise((res, rej) => {
  const openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
  openChannelListQuery.next((channels, error) => {
    if (error) {
      rej(error);
    }
    res(channels);
  });
});

const getGroupChannels = () => new Promise((res, rej) => {
  const channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
  channelListQuery.includeEmpty = true;
  channelListQuery.limit = 50;

  if (channelListQuery.hasNext) {
    channelListQuery.next((channelList, error) => {
      if (error) {
        rej(error);
      }
      res(channelList);
    });
  }
});

export async function getChannelsList() {
  const openChannels = await getOpenChannels();
  const groupChannels = await getGroupChannels();
  return [...openChannels, ...groupChannels];
}

export const enterOpenChannel = channelUrl => new Promise((res, rej) => {
  sb.OpenChannel.getChannel(channelUrl, (channel, error) => {
    if (error) {
      rej(error);
    }

    channel.enter((response, err) => {
      if (err) {
        rej(err);
      }

      res(channel);
    });
  });
});

export const getGroupChannel = channelUrl => new Promise((res, rej) => {
  sb.GroupChannel.getChannel(channelUrl, (channel, error) => {
    if (error) {
      rej(error);
    }

    res(channel);
  });
});

export const loadMessages = channel => new Promise((res, rej) => {
  const messageListQuery = channel.createPreviousMessageListQuery();
  messageListQuery.load(30, true, (messageList, error) => {
    if (error) {
      rej(error);
    }

    res(messageList);
  });
});

export const createOpenChannel = (name, coverUrl = null, data = null) => new Promise((res, rej) => {
  sb.OpenChannel.createChannel(
    name,
    coverUrl,
    data,
    (createdChannel, error) => {
      if (error) {
        console.error(error);
        rej();
      }

      res(createdChannel);
    },
  );
});

export const createGroupChannel = (
  userIds,
  name,
  coverUrl = null,
  data = null,
) => new Promise((res, rej) => {
  sb.GroupChannel.createChannelWithUserIds(
    userIds,
    false,
    name,
    coverUrl,
    data,
    (createdChannel, error) => {
      if (error) {
        console.error(error);
        rej();
      }

      res(createdChannel);
    },
  );
});

// MESSAGES STUFF

export const sendUserMessage = (
  channel,
  message,
  data = null,
  customType = null,
) => new Promise((res, rej) => {
  channel.sendUserMessage(message, data, customType, (msg, error) => {
    if (error) {
      rej(error);
    }

    res(msg);
  });
});

export const sendFileMessage = (
  channel,
  fileUrl,
  fileName,
  fileType,
  fileSize,
  data = null,
  customType = null,
) => new Promise((res, rej) => {
  console.log(
    'got data in sendbird: ',
    fileUrl,
    fileName,
    fileType,
    fileSize,
  );
  // res();
  channel.sendFileMessage(
    fileUrl,
    fileName,
    fileType,
    fileSize,
    data,
    customType,
    (msg, error) => {
      if (error) {
        rej(error);
      }
      console.log(msg);
      res(msg);
    },
  );
});

export const startTyping = channel => new Promise((res) => {
  // console.log('sendbird starttyping');
  channel.startTyping();
  res();
});

export const endTyping = channel => new Promise((res) => {
  // console.log('sendbird endTyping');
  channel.endTyping();
  res();
});

const getTypingUsers = channel => new Promise((res) => {
  const toResolve = channel.getTypingMembers();
  res(toResolve);
});

async function resolveTypingUsers(channel) {
  const users = await getTypingUsers(channel);
  return [...users];
}

const ChannelHandler = new sb.ChannelHandler();

ChannelHandler.onMessageReceived = (channel, message) => {
  store.dispatch(receiveMessage(channel, message));
};

ChannelHandler.onTypingStatusUpdated = (channel) => {
  const typers = resolveTypingUsers(channel);
  typers.then((result) => {
    store.dispatch(changeTypingStatus(channel, result));
  });
};

sb.addChannelHandler('111', ChannelHandler);
