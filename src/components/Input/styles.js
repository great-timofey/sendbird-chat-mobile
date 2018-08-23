import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  inputSection: {
    marginBottom: 24,
    height: 44,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    left: 16,
    bottom: 10,
  },
  showPasswordButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10,
    right: 8,
  },
  input: {
    color: colors.white,
    fontSize: 16,
    backgroundColor: colors.white20,
    paddingLeft: 55,
    width: '100%',
    height: '100%',
  },
  lastInput: {
    marginBottom: 0,
  },
});
