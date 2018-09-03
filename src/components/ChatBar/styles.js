import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  bottomBar: {
    padding: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: colors.darkGreyTransparent,
  },
  messageInput: {
    borderRadius: 20,
    borderColor: colors.darkGreyBlueTwo,
    borderWidth: 2,
    height: 40,
    flex: 1,
    paddingLeft: 15,
    marginRight: 5,
    fontSize: 18,
    backgroundColor: colors.white,
  },
  sendButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
