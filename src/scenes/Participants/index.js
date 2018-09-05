import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { findUsers, unsetUsers } from '../../redux/search/actions';
import { inviteUsers } from '../../redux/user/actions';
import Combobox from '../../components/Combobox';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  participants: Array,
  currentUserName: String,
  currentChannel: Object,
  foundUsers: Array,
  searching: Boolean,
  successful: Boolean,
  findUsers: Function,
  unsetUsers: Function,
  inviteUsers: Function,
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

  state = {
    showModal: false,
    query: '',
    invitees: [],
  };

  choosePositionCallback = (index) => {
    const { unsetUsers } = this.props;
    const { invitees } = this.state;
    const name = this.getChosenUserName(index);
    const id = this.getChosenUserId(index);
    const newInvitee = { name, id };
    this.setState(
      {
        query: '',
        invitees: [...invitees, newInvitee],
      },
      () => {
        console.log(this.state);
        unsetUsers();
      },
    );
  };

  clearCallback = () => {
    const { unsetUsers } = this.props;
    this.setState({ query: '' }, () => unsetUsers());
  };

  getChosenUserId = (index) => {
    const { foundUsers } = this.props;
    return foundUsers[index].sbUserId;
  };

  getChosenUserName = (index) => {
    const { foundUsers } = this.props;
    return foundUsers[index].username;
  };

  handleModal = () => this.setState(({ showModal }) => ({ showModal: !showModal }));

  handleInvite = () => {
    const { inviteUsers } = this.props;
    const { invitees } = this.state;
    inviteUsers(invitees.map(invitee => invitee.id));
  };

  inputChangeCallback = (value) => {
    const { findUsers } = this.props;
    this.setState({ query: value }, () => findUsers(this.state.query));
  };

  renderUsers = ({ item: { nickname, connectionStatus } }) => {
    const { currentUserName } = this.props;
    const isCurrent = currentUserName === nickname;
    const isOnline = connectionStatus === 'online';
    return (
      <View style={styles.user}>
        <Text style={{ color: colors.white, fontSize: 18 }}>{nickname}</Text>
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

  renderInvitees = ({ item }) => (
    <Text style={{ marginRight: 10, color: colors.darkSkyBlue, fontSize: 18 }}>
      {item.name}
    </Text>
  );

  render() {
    const {
      participants,
      currentChannel,
      foundUsers,
      searching,
      successful,
    } = this.props;
    const { query, showModal, invitees } = this.state;
    return (
      <View style={styles.container}>
        {showModal && (
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  marginBottom: 20,
                  fontWeight: 'bold',
                }}
              >
                Invite Users
              </Text>
              <Combobox
                value={query}
                options={foundUsers}
                searching={searching}
                inputChangeCallback={this.inputChangeCallback}
                choosePositionCallback={this.choosePositionCallback}
                clearCallback={this.clearCallback}
                successful={successful}
                displayValue="username"
                customKey="_id"
              />
              <View
                style={{
                  height: 50,
                  alignItems: 'center',
                  // flexDirection: 'row',
                }}
              >
                <Text style={{ color: 'white', fontSize: 16 }}>
                  Invited Users:
                </Text>
                <FlatList
                  contentContainerStyle={{
                    flexDirection: 'row',
                  }}
                  data={invitees}
                  renderItem={this.renderInvitees}
                  keyExtractor={(item, index) => index}
                />
              </View>
              <TouchableOpacity
                onPress={this.handleInvite}
                style={[
                  styles.inviteButton,
                  { height: 40, width: 120, marginTop: 10 },
                ]}
              >
                <Text style={styles.inviteButtonText}>Invite</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {currentChannel.channelType === 'group' && (
          <TouchableOpacity
            onPress={this.handleModal}
            style={styles.inviteButton}
          >
            <Text style={styles.inviteButtonText}>Invite User</Text>
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

export default connect(
  ({ user, search, chat: { participants } }) => ({
    participants,
    foundUsers: search.users,
    currentChannel: user.currentChannel,
    currentSbUserId: user.user.sbUserId,
    currentUserName: user.user.username,
    searching: search.searching,
    successful: search.successful,
  }),
  { findUsers, unsetUsers, inviteUsers },
)(Participants);
