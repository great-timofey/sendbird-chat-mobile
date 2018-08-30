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
import { getUsersOnlineStatuses, getLastSeenAt } from '../../utils/chatHelpers';
import colors from '../../global/colors';
import styles from './styles';

type Props = {
  channels: Array,
  enterChannel: Function,
  onlineStatuses: Array,
  lastSeenStatuses: Array,
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

  handleChannelEnter = (channelUrl, channelType, index, lastSeenStyle) => {
    const { enterChannel, setCurrentOnlineMessage } = this.props;
    setCurrentOnlineMessage(this.getUserSeenData(index, lastSeenStyle));
    enterChannel(channelUrl, channelType);
  };

  handleToggleControl = () => this.setState(({ showOpenChats }) => ({ showOpenChats: !showOpenChats }));

  getUserSeenData = (index, lastSeenStyle) => {
    const { onlineStatuses, lastSeenStatuses } = this.props;
    if (lastSeenStyle) {
      return `Last seen ${dayjs(lastSeenStatuses[index]).format('DD/MM/YY')}`;
    }
    return `Online:${
      onlineStatuses[index] === 1
        ? ' one user'
        : ` ${onlineStatuses[index]} users`
    }`;
  };

  renderUserSeenData = (index, lastSeenStyle) => (
    <Text style={[styles.onlineText, lastSeenStyle ? styles.lastSeenText : {}]}>
      {this.getUserSeenData(index, lastSeenStyle)}
    </Text>
  );

  renderChat = ({
    item: {
      channelType, name, url, coverUrl,
    }, index,
  }) => {
    const { onlineStatuses } = this.props;
    const lastSeenStyle = onlineStatuses[index] === 0;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleChannelEnter(url, channelType, index, lastSeenStyle)
        }
      >
        <View style={styles.coverContainer}>
          {coverUrl.length > 0 && (
            <Image style={styles.cover} source={{ uri: coverUrl }} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              channelType === 'open' ? { marginBottom: 0 } : {},
            ]}
          >
            {name}
          </Text>
          {channelType === 'group'
            && this.renderUserSeenData(index, lastSeenStyle)}
        </View>
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

export default connect(
  ({ common, user }) => ({
    isMenuOpen: common.isMenuOpen,
    channels: user.channels,
    //  need refactoring
    // groupChannelsStatuses: ???,
    // openChannelsStatuses: ???,
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
  { enterChannel, setCurrentOnlineMessage },
)(Chats);
