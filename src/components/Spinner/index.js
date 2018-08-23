import React, { Fragment } from 'react';
import {
  View, Image, ActivityIndicator, Text,
} from 'react-native';
import images from '../../global/images';
import styles from './styles';

type Props = {
  size?: String,
  error?: Boolean,
};

function Spinner({ size, error }: Props) {
  return (
    <View style={styles.overlay}>
      {error ? (
        <Fragment>
          <Image source={images.error} style={styles.error} />
          <Text style={styles.errorText}>
            Wrong authorization data! Please retry with valid login, password
            and email.
          </Text>
        </Fragment>
      ) : (
        <ActivityIndicator styles={styles.spinner} size={size} />
      )}
    </View>
  );
}

Spinner.defaultProps = {
  size: 'large',
  error: false,
};

export default Spinner;
