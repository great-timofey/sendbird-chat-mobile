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
    backgroundColor: colors.white20,
  },
  messageInput: {
    borderRadius: 15,
    borderColor: colors.darkGreyBlueTwo,
    borderWidth: 2,
    height: 40,
    flex: 1,
    paddingLeft: 5,
    marginRight: 5,
    fontSize: 20,
    backgroundColor: colors.white,
  },
  sendButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.darkSkyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
