import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: colors.darkGreyBlueTwo,
  },
  header: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 25,
    color: colors.white,
  },
  form: {
    width: 330,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: 'white',
    width: 180,
    height: 40,
    paddingLeft: 10,
  },
  typePicker: {
    paddingLeft: 0,
  },
  label: {
    fontSize: 18,
    maxWidth: 100,
    color: colors.darkSkyBlue,
    textAlign: 'center',
  },
  typeItem: {
    backgroundColor: colors.darkSky,
    color: 'white',
    height: 40,
  },
  createButton: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    height: 50,
    borderRadius: 6,
    backgroundColor: colors.darkSkyBlue,
    alignSelf: 'center',
  },
  createButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.dark,
  },
  inputIOS: {
    backgroundColor: 'white',
    width: 180,
    height: 40,
    textAlign: 'center',
    paddingLeft: 10,
    fontSize: 18,
    color: colors.black,
  },
});
