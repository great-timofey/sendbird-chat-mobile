import React from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import styles from './styles';

type Props = {
  isOpen: Boolean,
  children: Function,
  enterChannelCallback: Function,
  channels: Array,
};

const renderMenu = (channels, enterChannelCallback, type) => (
  <FlatList
    style={styles.list}
    data={channels.filter(channel => channel.channelType === type)}
    renderItem={({ item: { channelType, name, url } }) => (
      <TouchableOpacity
        style={styles.button}
        onPress={() => enterChannelCallback(url, channelType)}
      >
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    )}
    keyExtractor={item => item.url}
  />
);

const SideMenuWrapper = ({
  isOpen,
  children,
  channels,
  enterChannelCallback,
}: Props) => (
  <SideMenu
    menu={(
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>Open Channels</Text>
        {renderMenu(channels, enterChannelCallback, 'open')}
        <Text style={styles.sectionHeader}>Group Channels</Text>
        {renderMenu(channels, enterChannelCallback, 'group')}
      </View>
)}
    isOpen={isOpen}
  >
    {children}
  </SideMenu>
);

export default SideMenuWrapper;
