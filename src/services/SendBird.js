import SendBird from 'sendbird';

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
