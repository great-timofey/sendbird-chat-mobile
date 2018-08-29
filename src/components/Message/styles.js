import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    minWidth: 150,
    minHeight: 80,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.blue,
  },
  leftSide: {
    alignSelf: 'flex-start',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white20,
    color: colors.black,
  },
  rightSide: {
    alignSelf: 'flex-end',
    color: colors.white,
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  message: {
    fontSize: 13,
  },
  owner: {
    color: colors.white,
  },
  notOwner: {
    color: colors.black,
  },
});
