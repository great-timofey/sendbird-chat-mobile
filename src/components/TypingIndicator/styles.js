import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  typingIndicator: {
    backgroundColor: colors.darkGreyTransparent,
    position: 'absolute',
    height: 20,
    borderRadius: 5,
    left: 50,
    right: 50,
    bottom: -30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
