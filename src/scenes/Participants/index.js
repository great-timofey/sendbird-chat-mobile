import React, { Component, Fragment } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { findUsers, unsetUsers } from '../../redux/search/actions';
import { inviteUsers } from '../../redux/user/actions';
import { setError, unsetError } from '../../redux/common/actions';
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
  error?: String,
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
      () => unsetUsers(),
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

  handleModal = () => this.setState(
    ({ showModal }) => ({
      showModal: !showModal,
      query: '',
      invitees: [],
    }),
    () => this.props.error && this.props.unsetError(),
  );

  handleInvite = () => {
    const { inviteUsers, setError } = this.props;
    const { invitees } = this.state;
    invitees.length > 0
      ? inviteUsers(invitees.map(invitee => invitee.id))
      : setError('You should choose at least one user to invite');
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
      error,
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
              {error ? (
                <Text>{error}</Text>
              ) : (
                <Fragment>
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
                    }}
                  >
                    <Text
                      style={{ color: 'white', fontSize: 16, marginBottom: 5 }}
                    >
                      Invited Users:
                    </Text>
                    <FlatList
                      contentContainerStyle={{
                        flexDirection: 'row',
                      }}
                      data={invitees}
                      renderItem={this.renderInvitees}
                      keyExtractor={(index) => {
                        console.log(index);
                        return index.toString();
                      }}
                    />
                  </View>
                </Fragment>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: 250,
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={this.handleModal}
                  style={[
                    styles.modalButton,
                    { backgroundColor: colors.darkGreyBlueTransparent },
                  ]}
                >
                  <Text style={[styles.inviteButtonText, { color: 'white' }]}>
                    Return
                  </Text>
                </TouchableOpacity>
                {!error && (
                  <TouchableOpacity
                    onPress={this.handleInvite}
                    style={styles.modalButton}
                  >
                    <Text style={styles.inviteButtonText}>Invite</Text>
                  </TouchableOpacity>
                )}
              </View>
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

Participants.defaultProps = {
  error: '',
};

export default connect(
  ({
    user, search, chat: { participants }, common,
  }) => ({
    participants,
    foundUsers: search.users,
    currentChannel: user.currentChannel,
    currentSbUserId: user.user.sbUserId,
    currentUserName: user.user.username,
    searching: search.searching,
    successful: search.successful,
    error: common.error,
  }),
  {
    findUsers,
    unsetUsers,
    inviteUsers,
    setError,
    unsetError,
  },
)(Participants);
