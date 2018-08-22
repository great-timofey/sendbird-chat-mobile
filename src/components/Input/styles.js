import { StyleSheet } from 'react-native';
import constants from '../../global/constants';

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
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingLeft: 55,
    width: '100%',
    height: '100%',
  },
  lastInput: {
    marginBottom: 0,
  },
});
