import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageInput: {
    borderRadius: 20,
    borderColor: colors.darkGreyBlueTwo,
    borderWidth: 2,
    paddingLeft: 15,
    marginRight: 5,
    fontSize: 18,
    backgroundColor: colors.white,
  },
  progress: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
