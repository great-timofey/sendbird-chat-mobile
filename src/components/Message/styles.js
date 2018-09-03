import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    marginTop: 10,
  },
  messageContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    minWidth: 150,
    minHeight: 80,
    borderRadius: 10,
  },
  leftSide: {
    backgroundColor: colors.darkGreyTransparent,
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
    fontSize: 16,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
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
  time: {
    fontSize: 11,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  image: {
    width: 180,
    height: 90,
  },
});
