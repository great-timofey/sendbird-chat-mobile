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
  inputSection: {
    marginBottom: 24,
    height: 44,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    left: 16,
    bottom: 10,
  },
  eyeImage: {
    left: 'auto',
    right: 8,
  },
  input: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingLeft: 55,
    width: '100%',
    height: '100%',
  },
  lastInput: {
    marginBottom: 0,
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
