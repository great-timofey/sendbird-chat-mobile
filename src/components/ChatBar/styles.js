import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  bottomBar: {
    alignSelf: 'stretch',
    overflow: 'hidden',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darkGreyTransparent,
  },
  sendButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
