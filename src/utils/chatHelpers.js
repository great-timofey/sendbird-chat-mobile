const countOnlineMembers = channel => channel.members.filter(member => member.connectionStatus === 'online').length;

export const calculateOnline = channels => channels.reduce((acc, channel, index) => {
  if (channel.channelType === 'open') {
    acc[index] = channel.participantCount;
    return acc;
  }
  acc[index] = countOnlineMembers(channel) - 1;
  return acc;
}, []);
