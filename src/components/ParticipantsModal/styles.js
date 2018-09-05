import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    paddingTop: 120,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: colors.darkGreyBlueTransparent,
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.darkSky,
    height: 300,
    width: 350,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 6,
    backgroundColor: colors.darkSkyBlue,
  },
  invitedUsersContainer: {
    height: 50,
    alignItems: 'center',
  },
  invitedUsersText: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 5,
  },
  header: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  error: {
    color: colors.reddish,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
    marginTop: 10,
  },
  inviteButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.dark,
  },
});
