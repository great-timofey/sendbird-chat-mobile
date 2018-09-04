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
  currentChannel: Object,
};

class Participants extends Component<Props> {
  static navigationOptions = () => ({
    title: 'Channel Members',
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  renderUsers = ({ item: { nickname, connectionStatus } }) => {
    const { currentUserName } = this.props;
    const isCurrent = currentUserName === nickname;
    const isOnline = connectionStatus === 'online';
    return (
      <View style={styles.user}>
        <Text style={{ color: colors.white, fontSize: 18 }}>
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
    const { participants, currentChannel } = this.props;
    return (
      <View style={styles.container}>
        {currentChannel.channelType === 'group' && (
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteButtonText}>
Invite User
            </Text>
          </TouchableOpacity>
        )}
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
  currentChannel: user.currentChannel,
  currentUserName: user.user.username,
}))(Participants);
