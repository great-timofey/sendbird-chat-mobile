import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    minWidth: 150,
    minHeight: 80,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.darkSkyBlue,
  },
  leftSide: {
    alignSelf: 'flex-start',
    backgroundColor: 'red',
  },
  rightSide: {
    alignSelf: 'flex-end',
  },
  sender: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  message: {
    fontSize: 13,
  },
});
