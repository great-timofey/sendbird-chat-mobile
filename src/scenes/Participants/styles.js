import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.darkGreyBlueTwo,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.darkSky,
  },
});
