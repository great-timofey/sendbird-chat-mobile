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
    color: 'white',
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
    marginRight: 30,
    maxWidth: 100,
    color: colors.darkSkyBlue,
    textAlign: 'center',
  },
  typeItem: {
    backgroundColor: colors.darkSky,
    color: 'white',
    height: 40,
  },
  inputLabel: {
    marginRight: 10,
  },
  createButton: {
    backgroundColor: colors.darkSky,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    borderColor: colors.darkSkyBlue,
    alignItems: 'center',
  },
  createButtonText: {
    marginRight: 0,
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
