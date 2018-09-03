import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  bottomBar: {
    padding: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: colors.darkGreyTransparent,
  },
  sendButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
