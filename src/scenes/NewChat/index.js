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
import Input from '../../components/Input';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  inviterId: String,
  createChannel: Function,
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
    inviteeId: '',
  };

  handleCreateChannel = () => {
    const { channelType, channelName, inviteeId } = this.state;
    const { inviterId, createChannel } = this.props;
    createChannel(channelType, channelName, inviterId, inviteeId);
  };

  handleChangeData = param => value => this.setState({ [param]: value });

  render() {
    const { channelType, channelName, inviteeId } = this.state;
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
            <View style={styles.inputContainer}>
              <Text style={styles.label}>User Id</Text>
              <Input
                onInput={this.handleChangeData('inviteeId')}
                value={inviteeId}
                customStyles={styles}
              />
            </View>
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
  ({ user }) => ({ inviterId: user.user.sbUserId }),
  { createChannel },
)(NewChat);
