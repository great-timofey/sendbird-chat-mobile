import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    height: 65,
    paddingTop: 20,
    paddingHorizontal: 5,
    backgroundColor: colors.darkSky,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: colors.darkGreyTransparent,
  },
  leftButton: {
    marginLeft: 10,
  },
  leftImage: {
    height: 20,
    width: 20,
    tintColor: colors.darkSkyBlue,
  },
  headerContainer: {
    alignItems: 'center',
  },
  chatName: {
    color: colors.darkSkyBlue,
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 2,
  },
  userSeenStatus: {
    color: colors.darkGreyTransparent,
    fontSize: 12,
  },
  userOnlineStatus: {
    color: colors.darkSkyBlue,
    fontSize: 12,
  },
  rightButton: {
    backgroundColor: colors.darkGreyBlueTwo,
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 5,
  },
  rightImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
