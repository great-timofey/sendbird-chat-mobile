import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(46, 56, 87)',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  header: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: 'white',
    fontSize: 16,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
  },
  signButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'rgb(61, 165, 217)',
  },
  signText: {
    fontSize: 17,
    color: 'rgb(34, 42, 65)',
  },
});
