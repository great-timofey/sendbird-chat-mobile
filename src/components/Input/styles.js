import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  inputSection: {
    marginBottom: 24,
    width: 343,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: colors.white20,
    justifyContent: 'space-between',
  },
  image: {
    tintColor: 'white',
  },
  eyeImage: {
    tintColor: 'white',
  },
  input: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  lastInput: {
    marginBottom: 0,
  },
});
