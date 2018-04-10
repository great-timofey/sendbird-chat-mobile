import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counter from '../redux/actions/counter';
import { colors } from '../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    fontWeight: 'bold',
    fontSize: 70
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 40,
    height: 40,
    margin: 8
  },
  buttonText: {
    color: 'black',
    fontSize: 24
  }
});

@connect(
  state => ({ count: state.counter.count }),
  dispatch => bindActionCreators({
    decrement: counter.decrement,
    increment: counter.increment
  }, dispatch)
)
export default class Counter extends Component {
  static defaultProps = {
    count: 0
  }

  static propTypes = {
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    count: PropTypes.number
  }

  render() {
    const { count, decrement, increment } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.button, { backgroundColor: colors.flatRed }]} onPress={() => decrement()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: colors.flatGreen }]} onPress={() => increment()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
