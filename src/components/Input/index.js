import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';
import images from '../../global/images';

type Props = {
  type: String,
};

export default ({ type }: Props) => (
  <View style={styles.inputSection}>
    <Image source={images[type]} style={styles.image} />
    {type === 'mail' && (
      <Image source={images.eye} style={[styles.image, styles.eyeImage]} />
    )}
    <TextInput style={styles.input} />
  </View>
);
