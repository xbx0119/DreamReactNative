
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


import { AppStackNav } from './app/components/AppStackNav';


AppRegistry.registerComponent('DreamReactNative', () => AppStackNav);

