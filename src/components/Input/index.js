import React from 'react';
import {
  View, TextInput, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../../global/images';

type Props = {
  type: String,
  onInput: Function,
  hidePassword?: Boolean,
  handleShowPassword?: Function,
  value: String,
};

function Input({
  type,
  onInput,
  hidePassword,
  handleShowPassword,
  value,
}: Props) {
  return (
    <View style={styles.inputSection}>
      <Image source={images[type]} style={styles.image} />
      <TextInput
        secureTextEntry={hidePassword}
        onChangeText={onInput}
        style={styles.input}
        value={value}
        placeholder={type}
      />
      {type === 'password' && (
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={handleShowPassword}
        >
          <Image source={images.eye} style={styles.eyeImage} />
        </TouchableOpacity>
      )}
    </View>
  );
}

Input.defaultProps = {
  hidePassword: false,
  handleShowPassword: false,
};

export default Input;
