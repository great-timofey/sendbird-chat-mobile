import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

type Props = {
  loading: Boolean,
};

class Spinner extends Component<Props> {
  render() {
    const { loading } = this.props;
    const data = loading ? (
      <View style={styles.overlay}>
        <ActivityIndicator color="white" styles={styles.spinner} size="large" />
      </View>
    ) : null;

    return data;
  }
}

export default connect(({ common }) => ({ loading: common.loading }))(Spinner);
