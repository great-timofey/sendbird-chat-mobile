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

  handleChannelEnter = (channelUrl, channelType, index) => {
    const { enterChannel, setCurrentOnlineMessage } = this.props;
    setCurrentOnlineMessage('fake online bar message');
    enterChannel(channelUrl, channelType);
  };

  handleToggleControl = () => this.setState(({ showOpenChats }) => ({ showOpenChats: !showOpenChats }));

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
        <Text style={styles.onlineText}>Fake user seen chats message</Text>
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

export default connect(
  ({ common, user }) => ({
    isMenuOpen: common.isMenuOpen,
    channels: user.channels,
    //  need refactoring
    // groupChannelsStatuses: ???,
    // openChannelsStatuses: ???,
  }),
  { enterChannel, setCurrentOnlineMessage },
)(Chats);
