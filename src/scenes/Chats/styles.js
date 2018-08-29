import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGreyBlueTwo,
    paddingVertical: 20,
  },
  control: {
    width: 300,
    marginBottom: 20,
  },
  sectionHeader: {
    marginBottom: 5,
  },
  list: {
    width: '100%',
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.darkSky,
  },
  coverContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: colors.darkGreyBlueTwo,
  },
  cover: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10,
  },
  onlineText: {
    color: colors.darkSkyBlue,
    fontSize: 12,
  },
  lastSeenText: {
    color: colors.white20,
  },
});
