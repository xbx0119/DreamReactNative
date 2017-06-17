
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button
} from 'react-native';

import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";


import { AppNav } from './app/components/AppNav';


AppRegistry.registerComponent('DreamReactNative', () => AppNav);

