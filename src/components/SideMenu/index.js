import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import styles from './styles';

type Props = {
  channels?: Array,
};

const MockChannels = [
  { key: '1', text: 'mock channel', header: 'channel' },
  { key: '2', text: 'mock channel', header: 'channel' },
  { key: '3', text: 'mock channel', header: 'channel' },
  { key: '4', text: 'mock channel', header: 'channel' },
];

const Menu = ({ channels }: Props) => (
  <View style={styles.container}>
    <FlatList
      data={MockChannels}
      renderItem={({ item: { key, text } }) => (
        <Text style={styles.text}>{`${key}: ${text}`}</Text>
      )}
    />
  </View>
);

Menu.defaultProps = {
  channels: [],
};

// const ConnectedMenu = connect(({ channels }) => ({ channels }))(Menu)

export default ({ isOpen, children }) => (
  <SideMenu menu={<Menu />} isOpen={isOpen}>
    {children}
  </SideMenu>
);
