import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { createChannel } from '../../redux/user/actions';
import { findUsers, unsetUsers } from '../../redux/search/actions';
import Combobox from '../../components/Combobox';
import Input from '../../components/Input';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  inviterId: String,
  createChannel: Function,
  findUsers: Function,
  foundUsers: Array,
  searching: Boolean,
  successful: Boolean,
};

class NewChat extends Component<Props> {
  static navigationOptions = {
    title: 'New Chat',
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    channelType: '',
    channelName: '',
    query: '',
    inviteeData: '',
  };

  clearCallback = () => this.setState({ query: '' }, () => this.props.unsetUsers());

  choosePositionCallback = e => console.log(this.ref);

  inputChangeCallback = value => this.setState({ query: value }, () => this.props.findUsers(this.state.query));

  handleChangeData = param => value => this.setState({ [param]: value });

  handleCreateChannel = () => {
    const { channelType, channelName, inviteeData } = this.state;
    const { inviterId, createChannel } = this.props;
    console.log(this.state);
    // here we are going to extract inviteeId from inviteeData gotten from Combobox
    // createChannel(channelType, channelName, inviterId, ?);
  };

  handleChangeData = param => value => this.setState({ [param]: value });

  handleBindListElement = item => this.setState({ item });

  render() {
    const {
      channelType, channelName, inviteeData, query,
    } = this.state;
    const { foundUsers, searching, successful } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>Please choose new chat parameters</Text>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Type</Text>
            <RNPickerSelect
              items={[
                { label: 'Group', value: 'group' },
                { label: 'Open', value: 'open' },
              ]}
              onValueChange={this.handleChangeData('channelType')}
              style={styles}
              hideIcon
              placeholder={{ label: 'Chat Type...', value: null }}
              value={channelType}
            />
          </View>
          {channelType === 'group' && (
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
              bindFunction={this.handleBindListElement}
            />
          )}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Name</Text>
            <Input
              onInput={this.handleChangeData('channelName')}
              value={channelName}
              customStyles={styles}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Cover (Optional)</Text>
            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity
            style={styles.createButton}
            onPress={this.handleCreateChannel}
          >
            <Text style={[styles.label, styles.createButtonText]}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(
  ({ user, search }) => ({
    foundUsers: search.users,
    inviterId: user.user.sbUserId,
    searching: search.searching,
    successful: search.successful,
  }),
  { createChannel, findUsers, unsetUsers },
)(NewChat);
