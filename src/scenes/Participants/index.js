import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { findUsers, unsetUsers } from '../../redux/search/actions';
import { inviteUsers } from '../../redux/user/actions';
import {
  setError,
  unsetError,
  unsetSuccessMessage,
} from '../../redux/common/actions';
import ParticipantsModal from '../../components/ParticipantsModal';
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
  unsetError: Function,
  unsetSuccessMessage: Function,
  successMessage?: String,
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
    const { invitees } = this.state;
    this.setState({ query: '' }, () => {
      if (invitees.length > 0) this.sunsetUsers();
    });
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
    () => {
      const {
        error,
        successMessage,
        unsetError,
        unsetSuccessMessage,
      } = this.props;
      if (error) unsetError();
      if (successMessage) unsetSuccessMessage();
    },
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
    <Text style={styles.invitee}>{item.name}</Text>
  );

  render() {
    const {
      participants,
      currentChannel,
      foundUsers,
      searching,
      successful,
      successMessage,
      error,
    } = this.props;
    const { query, showModal, invitees } = this.state;
    return (
      <View style={styles.container}>
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
        {showModal && (
          <ParticipantsModal
            foundUsers={foundUsers}
            searching={searching}
            successful={successful}
            error={error}
            invitees={invitees}
            renderInvitees={this.renderInvitees}
            handleInvite={this.handleInvite}
            handleModal={this.handleModal}
            onChoosePosition={this.choosePositionCallback}
            onClear={this.clearCallback}
            onInputChange={this.inputChangeCallback}
            query={query}
            successMessage={successMessage}
          />
        )}
      </View>
    );
  }
}

Participants.defaultProps = {
  error: '',
  successMessage: '',
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
    loading: common.loading,
    successMessage: common.successMessage,
  }),
  {
    findUsers,
    unsetUsers,
    inviteUsers,
    setError,
    unsetError,
    unsetSuccessMessage,
  },
)(Participants);
