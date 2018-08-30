//  function for getting array with values of online users count for every GROUP channel

export const getUsersOnlineStatuses = (channels, currentUserId) => channels
  .map(channel => channel.members
    .filter(member => member.userId !== currentUserId)
    .map(member => member.connectionStatus))
  .reduce((acc, item, index) => {
    if (!acc[index]) {
      acc[index] = 0;
    }
    if (item[0] === 'online') {
      acc[index]++;
    }
    return acc;
  }, []);

export const getLastSeenAt = (channels, currentUserId) => channels
  .map(channel => channel.members
    .filter(member => member.userId !== currentUserId)
    .map(member => member.lastSeenAt))
  .reduce((acc, item, index) => {
    if (item[0] !== 0) {
      acc[index] = item[0];
    }
    return acc;
  }, {});
