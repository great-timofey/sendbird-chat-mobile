import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  messageInput: {
    borderRadius: 20,
    borderColor: colors.darkGreyBlueTwo,
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 35,
    marginRight: 5,
    width: 275,
    height: 40,
    fontSize: 18,
    backgroundColor: colors.white,
  },
  progress: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
