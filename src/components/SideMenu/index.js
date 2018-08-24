import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import SideMenu from 'react-native-side-menu';
import styles from './styles';

type MenuProps = {
  channels: Array,
};

const Menu = ({ channels }: MenuProps) => (
  <View style={styles.container}>
    <FlatList
      data={channels}
      renderItem={({ item: { channelType, name } }) => (
        <Text style={styles.text}>{`${channelType}: ${name}`}</Text>
      )}
      keyExtractor={item => item.url}
    />
  </View>
);

type SideMenuProps = {
  isOpen: Boolean,
  children: Function,
  channels: Array,
};

const SideMenuWrapper = ({ isOpen, children, channels }: SideMenuProps) => (
  <SideMenu menu={<Menu channels={channels} />} isOpen={isOpen}>
    {children}
  </SideMenu>
);

export default SideMenuWrapper;
