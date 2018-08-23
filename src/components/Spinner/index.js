import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

type Props = {
  size?: String,
};

function Spinner({ size }: Props) {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator color="white" styles={styles.spinner} size={size} />
    </View>
  );
}

Spinner.defaultProps = {
  size: 'large',
};

export default Spinner;
