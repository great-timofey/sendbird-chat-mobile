import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.darkGreyBlueTwo,
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
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 6,
    backgroundColor: colors.darkSkyBlue,
    marginBottom: 40,
  },
  signText: {
    fontSize: 17,
    color: colors.dark,
  },
  toSignUp: {
    width: '70%',
    flexDirection: 'row',
  },
  toSignUpText: {
    color: colors.white30,
  },
  toSignUpLink: {
    color: colors.sky,
  },
});
