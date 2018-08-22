import { StyleSheet } from 'react-native';
import constants from '../../global/constants';

export default StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(46, 56, 87)',
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  header: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    marginBottom: 48,
  },
  signButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 6,
    backgroundColor: constants.darkSkyBlue,
    marginBottom: 40,
  },
  signText: {
    fontSize: 17,
    color: constants.dark,
  },
  toSignUp: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
  },
  toSignUpText: {
    color: 'rgba(255, 255, 255, 0.3)',
  },
  toSignUpLink: {
    color: constants.sky,
  },
});
