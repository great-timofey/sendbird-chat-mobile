import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: colors.darkGreyBlueTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    flex: 1,
  },
  error: {
    flex: 2,
  },
  errorText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
  },
});
