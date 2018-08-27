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
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.darkSky,
  },
  text: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.white,
  },
});
