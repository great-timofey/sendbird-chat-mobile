import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.darkGreyBlueTwo,
    paddingTop: 20,
  },
  control: {
    width: '80%',
    marginBottom: 20,
  },
  sectionHeader: {
    marginBottom: 5,
  },
  list: {
    flex: 1,
    width: '80%',
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
