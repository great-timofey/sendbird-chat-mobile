import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  Text,
  SegmentedControlIOS,
} from 'react-native';
import { connect } from 'react-redux';
import { NewChatScene } from '../../navigation/scenes';
import { toggleMenu } from '../../redux/common/actions';
import { enterChannel } from '../../redux/user/actions';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  channels: Array,
  navigation: Object,
  enterChannel: Function,
};

class Chats extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Available Chats',
    headerStyle: {
      backgroundColor: colors.darkSky,
    },
    headerTintColor: colors.darkSkyBlue,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Text
        onPress={() => navigation.navigate(NewChatScene)}
        style={{
          fontSize: 30,
          color: 'white',
          marginRight: 10,
          marginBottom: 10,
        }}
      >
        +
      </Text>
    ),
  });

  state = {
    showOpen: true,
  };

  handleChannelEnter = (channelUrl, channelType) => {
    const { navigation, enterChannel, channels } = this.props;
    enterChannel(channelUrl, channelType);
    navigation.setParams({
      chatName: channels.find(channel => channel.url === channelUrl).name,
    });
  };

  handleToggleControl = () => this.setState(({ showOpen }) => ({ showOpen: !showOpen }));

  render() {
    const { showOpen } = this.state;
    const { channels } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SegmentedControlIOS
          style={styles.control}
          selectedIndex={0}
          values={['Open', 'Group']}
          tintColor={colors.darkSkyBlue}
          onChange={this.handleToggleControl}
        />
        <FlatList
          style={styles.list}
          data={channels.filter(
            channel => channel.channelType === (showOpen ? 'open' : 'group'),
          )}
          renderItem={({ item: { channelType, name, url } }) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleChannelEnter(url, channelType)}
            >
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.url}
        />
      </View>
    );
  }
}

export default connect(
  ({ common, user }) => ({
    isMenuOpen: common.isMenuOpen,
    channels: user.channels,
  }),
  { enterChannel, toggleMenu },
)(Chats);
