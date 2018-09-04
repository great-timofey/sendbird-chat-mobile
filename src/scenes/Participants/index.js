import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  participants: Array,
};

class Participants extends Component<Props> {
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

  renderUsers = ({ item: { nickname, connectionStatus } }) => (
    <View style={styles.user}>
      <Text style={{ color: 'white' }}>
        {nickname}
      </Text>
      <Text style={{ color: colors.darkSkyBlue, fontWeight: 'bold' }}>
        {connectionStatus}
      </Text>
    </View>
  );

  render() {
    const { participants } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={participants}
          renderItem={this.renderUsers}
          keyExtractor={item => item.userId}
        />
      </View>
    );
  }
}

export default connect(({ chat: { participants } }) => ({ participants }))(
  Participants,
);
