import React from 'react';
import { View } from 'react-native';
import { DotsLoader } from 'react-native-indicator';
import colors from '../../global/colors';
import styles from './styles';

export default () => (
  <View style={styles.typingIndicator}>
    <DotsLoader color={colors.black} />
  </View>
);
