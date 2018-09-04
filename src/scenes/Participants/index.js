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
  currentUserName: String,
};

class Participants extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Channel Members',
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight:
      navigation.getParam('channelType') === 'group' ? (
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Text style={{ color: colors.white }}>
Invite...
          </Text>
        </TouchableOpacity>
      ) : null,
  });

  renderUsers = ({ item: { nickname, connectionStatus } }) => {
    const { currentUserName } = this.props;
    const isCurrent = currentUserName === nickname;
    const isOnline = connectionStatus === 'online';
    return (
      <View style={styles.user}>
        <Text style={{ color: 'white' }}>
          {nickname}
        </Text>
        <Text
          style={[
            isCurrent
              ? { color: colors.white20 }
              : { color: isOnline ? colors.darkSkyBlue : colors.white },
            isOnline && { fontWeight: 'bold' },
          ]}
        >
          {isCurrent ? 'You' : connectionStatus}
        </Text>
      </View>
    );
  };

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

export default connect(({ user, chat: { participants } }) => ({
  participants,
  currentUserName: user.user.username,
}))(Participants);
