import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: colors.flatBlue,
    borderRadius: 6
  },
  buttonText: {
    margin: 12,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Counter')}>
          <Text style={styles.buttonText}>Redux Counter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
