import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  messageContainer: {
    padding: 10,
    minWidth: 150,
    minHeight: 80,
    borderRadius: 10,
  },
  leftSide: {
    backgroundColor: colors.darkGreyTransparent,
    borderWidth: 1,
    borderColor: colors.white30,
    color: colors.black,
    alignSelf: 'flex-start',
  },
  rightSide: {
    backgroundColor: colors.blue,
    color: colors.white,
    alignSelf: 'flex-end',
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
  dateContainer: {
    width: 75,
    height: 20,
    top: -25,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: colors.darkSkyBlue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 11,
    color: colors.darkGreyBlueTwo,
  },
});
