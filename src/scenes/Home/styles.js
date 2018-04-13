import { StyleSheet } from 'react-native';
import { colors } from '../../global';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.flatBlue,
    borderRadius: 6
  },
  buttonText: {
    margin: 12,
    fontWeight: 'bold',
    color: 'black'
  },
  titleText: {
    marginLeft: 20,
    marginTop: 5,
  },
  input: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
  }
});
