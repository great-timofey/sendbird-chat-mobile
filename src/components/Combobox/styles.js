import { StyleSheet } from 'react-native';
import colors from '../../global/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    marginBottom: 15,
    alignItems: 'center',
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
    zIndex: 10,
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
    fontSize: 15,
  },
  optionsList: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
    height: 400,
    backgroundColor: 'red',
    //  what is the reason of incorrect work of zIndex?
    zIndex: 5,
  },
  option: {
    borderBottomWidth: 1,
    paddingLeft: 10,
    borderColor: colors.black,
    backgroundColor: colors.darkSkyBlue,
    height: 50,
    //  what is the reason of incorrect work of zIndex?
    zIndex: 10,
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
