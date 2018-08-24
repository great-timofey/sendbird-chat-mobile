import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkSkyBlue,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    marginBottom: 5,
  },
  list: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.black,
    marginBottom: 2,
    paddingVertical: 5,
    backgroundColor: colors.darkSky,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
  },
});
