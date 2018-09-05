import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGreyBlueTwo,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.darkSky,
  },
  inviteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    height: 50,
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: colors.darkSkyBlue,
    alignSelf: 'center',
  },
  inviteButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.dark,
  },
  label: {
    fontSize: 15,
    maxWidth: 100,
    color: colors.darkSkyBlue,
    textAlign: 'center',
  },
  invitee: {
    marginRight: 10,
    color: colors.darkSkyBlue,
    fontSize: 18,
  },
});
