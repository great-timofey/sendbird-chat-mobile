export const currentChannelSelector = state => state.user.currentChannel;
export const currentUserSelector = state => state.user.user;
export const currentOnlineMessageSelector = state => state.common.currentOnlineMessage;
export const currentMembersSelector = state => state.user.currentChannel.members;
export const currentChannelParticipantsIds = state => state.chat.participants.reduce((acc, item, index) => {
  acc[index] = item.userId;
  return acc;
}, []);
