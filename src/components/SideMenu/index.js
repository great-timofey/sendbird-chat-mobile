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

const renderMenu = (channels, enterChannelCallback) => (
  <View style={styles.container}>
    <FlatList
      data={channels}
      renderItem={({ item: { channelType, name, url } }) => (
        <TouchableOpacity
          onPress={() => enterChannelCallback(url, channelType)}
        >
          <Text style={styles.text}>{`${channelType}: ${name}`}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.url}
    />
  </View>
);

const SideMenuWrapper = ({
  isOpen,
  children,
  channels,
  enterChannelCallback,
}: Props) => (
  <SideMenu menu={renderMenu(channels, enterChannelCallback)} isOpen={isOpen}>
    {children}
  </SideMenu>
);

export default SideMenuWrapper;
