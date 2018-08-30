import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGreyBlueTwo,
  },
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
  typingIndicator: {
    width: 100,
    height: 50,
    position: 'absolute',
    bottom: 500,
    left: '50%',
    right: '50%',
  },
  sendButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
