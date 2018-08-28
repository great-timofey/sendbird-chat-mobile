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
  lastSeenStatuses: Array,
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

  renderUserSeenData = (index) => {
    const { onlineStatuses, lastSeenStatuses } = this.props;
    const lastSeenStyle = onlineStatuses[index] === 0;
    return (
      <Text
        style={[styles.onlineText, lastSeenStyle ? styles.lastSeenText : {}]}
      >
        {lastSeenStyle
          ? `Last seen ${new Date(lastSeenStatuses[index])
            .toISOString()
            .substring(0, 10)}`
          : `Online:${
            onlineStatuses[index] === 1
              ? ' one user'
              : ` ${onlineStatuses[index]}users`
          }`}
      </Text>
    );
  };

  renderChat = ({
    item: {
      channelType, name, url, coverUrl,
    }, index,
  }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => this.handleChannelEnter(url, channelType)}
    >
      <View style={styles.coverContainer}>
        {coverUrl.length > 0 && (
        <Image style={styles.cover} source={{ uri: coverUrl }} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        {channelType === 'group' && this.renderUserSeenData(index)}
      </View>
    </TouchableOpacity>
  );

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

const getLastSeenAt = (channels, currentUserId) => channels
  .map(channel => channel.members
    .filter(member => member.userId !== currentUserId)
    .map(member => member.lastSeenAt))
  .reduce((acc, item, index) => {
    if (item[0] !== 0) {
      acc[index] = item[0];
    }
    return acc;
  }, {});

export default connect(
  ({ common, user }) => ({
    isMenuOpen: common.isMenuOpen,
    channels: user.channels,
    onlineStatuses: getUsersOnlineStatuses(
      user.channels.filter(channel => channel.channelType === 'group'),
      user.user.sbUserId,
    ),
    lastSeenStatuses: getLastSeenAt(
      user.channels.filter(
        channel => channel.channelType === 'group' && channel.memberCount === 2,
      ),
      user.user.sbUserId,
    ),
  }),
  { enterChannel },
)(Chats);
