import React from 'react';
import {
  View, TextInput, Image, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../../global/images';

type Props = {
  type?: String,
  onInput: Function,
  hidePassword?: Boolean,
  handleShowPassword?: Function,
  value: String,
  withImage?: Boolean,
  customStyles?: Object,
};

function Input({
  type,
  onInput,
  hidePassword,
  handleShowPassword,
  value,
  withImage = false,
  customStyles = null,
}: Props) {
  const innerStyles = customStyles || styles;
  return (
    <View style={innerStyles.inputSection}>
      {withImage && <Image source={images[type]} style={innerStyles.image} />}
      <TextInput
        secureTextEntry={hidePassword}
        onChangeText={onInput}
        style={innerStyles.input}
        value={value}
        placeholder={type}
      />
      {type === 'password' && (
        <TouchableOpacity
          style={innerStyles.showPasswordButton}
          onPress={handleShowPassword}
        >
          <Image source={images.eye} style={innerStyles.eyeImage} />
        </TouchableOpacity>
      )}
    </View>
  );
}

Input.defaultProps = {
  type: '',
  hidePassword: false,
  handleShowPassword: false,
  withImage: false,
  customStyles: null,
};

export default Input;
