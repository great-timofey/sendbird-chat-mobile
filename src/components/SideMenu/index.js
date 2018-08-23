import React, { Component } from 'react';
import { Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import styles from './styles';

export default ({ isOpen, children }) => (
  <SideMenu menu={<Text>Hello from menu</Text>} isOpen={isOpen}>
    {children}
  </SideMenu>
);
