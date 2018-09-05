import React, { Fragment } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import Combobox from '../Combobox';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  foundUsers: Array,
  invitees: Array,
  searching: Boolean,
  successful: Boolean,
  error: String,
  query: String,
  successMessage: String,
  handleModal: Function,
  onChoosePosition: Function,
  onClear: Function,
  onInputChange: Function,
  renderInvitees: Function,
  handleInvite: Function,
};

export default ({
  foundUsers,
  invitees,
  renderInvitees,
  handleInvite,
  handleModal,
  searching,
  successful,
  successMessage,
  error,
  onChoosePosition,
  onClear,
  onInputChange,
  query,
}: Props) => (
  <View style={styles.overlay}>
    <View style={styles.modalContainer}>
      <Text style={styles.header}>Invite Users</Text>
      {error || successMessage ? (
        <Text
          style={[styles.error, successMessage && { color: colors.seaGreen }]}
        >
          {error || successMessage}
        </Text>
      ) : (
        <Fragment>
          <Combobox
            value={query}
            options={foundUsers}
            searching={searching}
            inputChangeCallback={onInputChange}
            choosePositionCallback={onChoosePosition}
            clearCallback={onClear}
            successful={successful}
            displayValue="username"
            customKey="_id"
          />
          <View style={styles.invitedUsersContainer}>
            <Text style={styles.invitedUsersText}>Invited Users:</Text>
            {invitees.length === 0 && (
              <Text
                style={[styles.invitedUsersText, { color: colors.white30 }]}
              >
                No users are invited
              </Text>
            )}
            <FlatList
              contentContainerStyle={{
                flexDirection: 'row',
              }}
              data={invitees}
              renderItem={renderInvitees}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Fragment>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleModal}
          style={[
            styles.modalButton,
            { backgroundColor: colors.darkGreyBlueTransparent },
          ]}
        >
          <Text style={[styles.inviteButtonText, { color: 'white' }]}>
            Return
          </Text>
        </TouchableOpacity>
        {!error
          && !successMessage && (
            <TouchableOpacity onPress={handleInvite} style={styles.modalButton}>
              <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  </View>
);
