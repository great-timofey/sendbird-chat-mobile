import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  SegmentedControlIOS,
} from 'react-native';
import { connect } from 'react-redux';
import { NewChatScene } from '../../navigation/scenes';
import { enterChannel } from '../../redux/user/actions';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  channels: Array,
  navigation: Object,
  enterChannel: Function,
  onlineStatuses: Array,
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
          color: colors.darkSkyBlue,
          marginRight: 10,
          marginBottom: 10,
        }}
      >
        +
      </Text>
    ),
  });

  state = {
    showOpenChats: true,
  };

  handleChannelEnter = (channelUrl, channelType) => {
    const { navigation, enterChannel, channels } = this.props;
    enterChannel(channelUrl, channelType);
    navigation.setParams({
      chatName: channels.find(channel => channel.url === channelUrl).name,
    });
  };

  handleToggleControl = () => this.setState(({ showOpenChats }) => ({ showOpenChats: !showOpenChats }));

  renderChat = ({
    item: {
      channelType, name, url, coverUrl,
    }, index,
  }) => {
    const { onlineStatuses } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleChannelEnter(url, channelType)}
      >
        <View style={styles.coverContainer}>
          {coverUrl.length > 0 && (
            <Image style={styles.cover} source={{ uri: coverUrl }} />
          )}
        </View>
        <Text style={styles.text}>{name}</Text>
        {channelType === 'group' && (
          <Text
            style={[
              styles.onlineText,
              {
                display: onlineStatuses[index] > 0 ? 'flex' : 'none',
              },
            ]}
          >
            {`Online:${
              onlineStatuses[index] === 1
                ? ' one user'
                : ` ${onlineStatuses[index]}users`
            }`}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  render() {
    const { showOpenChats } = this.state;
    const { channels } = this.props;
    return (
      <View style={styles.container}>
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
            channel => channel.channelType === (showOpenChats ? 'open' : 'group'),
          )}
          renderItem={this.renderChat}
          keyExtractor={item => item.url}
        />
      </View>
    );
  }
}

//  function for getting array with values of online users count for every group channel

const getUsersOnlineStatuses = (channels, currentUserId) => channels
  .map(channel => channel.members
    .filter(member => member.userId !== currentUserId)
    .map(member => member.connectionStatus))
  .reduce((acc, item, index) => {
    if (!acc[index]) {
      acc[index] = 0;
    }
    if (item[0] === 'online') {
      acc[index]++;
    }
    return acc;
  }, []);

export default connect(
  ({ common, user }) => ({
    isMenuOpen: common.isMenuOpen,
    channels: user.channels,
    onlineStatuses: getUsersOnlineStatuses(
      user.channels.filter(channel => channel.channelType === 'group'),
      user.user.sbUserId,
    ),
  }),
  { enterChannel },
)(Chats);
