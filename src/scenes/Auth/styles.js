import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  },
  form: {
    marginTop: 40,
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
  toggleModeSection: {
    flexDirection: 'row',
  },
  toggleModeText: {
    color: colors.white30,
  },
  toggleModeButton: {
    color: colors.sky,
  },
});
