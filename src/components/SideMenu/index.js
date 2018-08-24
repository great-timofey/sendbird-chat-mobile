import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import SideMenu from 'react-native-side-menu';
import styles from './styles';

type Props = {
  isOpen: Boolean,
  children: Function,
  channels: Array,
};

const renderMenu = channels => (
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

const SideMenuWrapper = ({ isOpen, children, channels }: Props) => (
  <SideMenu menu={renderMenu(channels)} isOpen={isOpen}>
    {children}
  </SideMenu>
);

export default SideMenuWrapper;
