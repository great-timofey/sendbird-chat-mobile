import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  SegmentedControlIOS,
} from 'react-native';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { NewChatScene } from '../../navigation/scenes';
import { enterChannel } from '../../redux/user/actions';
import { setCurrentOnlineMessage } from '../../redux/common/actions';
import { calculateOnline } from '../../utils/chatHelpers';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  channels: Array,
  enterChannel: Function,
  setCurrentOnlineMessage: Function,
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

  //  methods for handling chat logic

  handleChannelEnter = (channelUrl, channelType, index) => {
    const { enterChannel, setCurrentOnlineMessage } = this.props;
    setCurrentOnlineMessage('fake online bar message');
    enterChannel(channelUrl, channelType);
  };

  //  methods for rendering chats and online statuses

  handleToggleControl = () => this.setState(({ showOpenChats }) => ({ showOpenChats: !showOpenChats }));

  getUserOnlineStatusData = (index) => {
    const {
      onlineOpenStatuses,
      onlineGroupStatuses,
      groupChannels,
      channels,
    } = this.props;
    const { showOpenChats } = this.state;
    let count = onlineGroupStatuses[index];
    if (!showOpenChats && groupChannels[index] === 2) {
      return count === 1 ? 'Online' : 'Last seen somewhen';
    }
    if (showOpenChats) {
      count = onlineOpenStatuses[index];
    }
    return count === 0
      ? 'No users online'
      : `${count} user${count > 1 ? 's' : ''} online`;
  };

  renderChat = ({
    item: {
      channelType, name, url, coverUrl,
    }, index,
  }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => this.handleChannelEnter(url, channelType, index)}
    >
      <View style={styles.coverContainer}>
        {coverUrl.length > 0 && (
        <Image style={styles.cover} source={{ uri: coverUrl }} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text]}>{name}</Text>
        <Text style={styles.onlineText}>
          {this.getUserOnlineStatusData(index)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { showOpenChats } = this.state;
    const { channels, onlineOpenStatuses, onlineGroupStatuses } = this.props;
    // console.log(onlineOpenStatuses);
    // console.log(onlineGroupStatuses);
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

const getChannelsByType = (channels, type) => channels.filter(channel => channel.channelType === type);

export default connect(
  ({ common, user }) => ({
    isMenuOpen: common.isMenuOpen,
    channels: user.channels,
    groupChannels: getChannelsByType(user.channels, 'group'),
    onlineOpenStatuses: calculateOnline(
      getChannelsByType(user.channels, 'open'),
    ),
    onlineGroupStatuses: calculateOnline(
      getChannelsByType(user.channels, 'group'),
    ),
  }),
  { enterChannel, setCurrentOnlineMessage },
)(Chats);
