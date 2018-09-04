import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import MessagesList from '../../components/MessagesList';
import colors from '../../global/colors';
// import styles from './styles';

type Props = {};

export default class Participants extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Participants',
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  render() {
    return (
      <Text>
here goes Participants screen
      </Text>
    );
  }
}
