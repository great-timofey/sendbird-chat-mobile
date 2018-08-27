import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Picker,
  Image,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { toggleMenu } from '../../redux/common/actions';
import { enterChannel } from '../../redux/user/actions';
import Input from '../../components/Input';
import colors from '../../global/colors';
import styles from './styles';

type Props = {};

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
    inviterId: '',
    inviteeId: '',
  };

  handleCreateChannel = () => {
    console.log(this.state);
  };

  render() {
    const {
      channelType, channelName, inviterId, inviteeId,
    } = this.state;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={65}
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Please define new chat parameters</Text>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Type</Text>
            <RNPickerSelect
              items={[
                { label: 'Group', value: 'group' },
                { label: 'Open', value: 'open' },
              ]}
              onValueChange={itemValue => this.setState({ channelType: itemValue })
              }
              style={styles}
              hideIcon
              placeholder={{ label: 'Chat Type...', value: null }}
              value={channelType}
            />
            {null && (
              <Picker
                style={{ ...styles.input, ...styles.typePicker }}
                selectedValue={channelType}
                itemStyle={styles.typeItem}
              >
                <Picker.Item label="Group" value="group" />
                <Picker.Item label="Open" value="Open" />
              </Picker>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Name</Text>
            <Input
              onInput={text => this.setState({ channelName: text })}
              value={channelName}
              withImage
              customStyles={styles}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Chat Cover (Optional)</Text>
            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => this.handleCreateChannel()}
          >
            <Text style={[styles.label, styles.createButtonText]}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(NewChat);
