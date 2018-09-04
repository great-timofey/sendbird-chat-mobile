import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    marginBottom: 15,
    alignItems: 'center',
    zIndex: 2,
  },
  comboboxContainer: {
    flexDirection: 'row',
    width: 180,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loaderView: {
    position: 'absolute',
    backgroundColor: colors.darkGreyTransparent,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  input: {
    paddingLeft: 10,
    width: 150,
    height: 35,
    backgroundColor: colors.white,
  },
  label: {
    color: colors.darkSkyBlue,
    paddingLeft: 0,
    marginLeft: 0,
    marginRight: 10,
    fontSize: 18,
  },
  optionsList: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
  },
  option: {
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingTop: 10,
    borderColor: colors.black,
    backgroundColor: colors.darkSkyBlue,
    height: 35,
  },
  clearButton: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkSkyBlue,
  },
  clearLabel: {
    fontSize: 20,
  },
});
