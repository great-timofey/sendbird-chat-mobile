import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.darkGreyBlueTwo,
  },
  topBar: {
    flex: 1,
    backgroundColor: colors.dark,
    width: '100%',
  },
  message: {
    width: 200,
    height: 100,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.darkSkyBlue,
  },
  chatZone: {
    flex: 7,
    backgroundColor: colors.darkGreyBlueTwo,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bottomBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.dark,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  messageInput: {
    flex: 4,
    height: 50,
    paddingLeft: 20,
    backgroundColor: colors.white30,
  },
  sendButton: {
    flex: 1,
    height: 50,
    backgroundColor: colors.darkSkyBlue,
  },
  sendText: {
    textAlign: 'center',
    lineHeight: 50,
  },
});
