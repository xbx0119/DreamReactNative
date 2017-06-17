
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Button
} from 'react-native';

import { StackNavigator, TabNavigator } from "react-navigation";


import { AppTabNav } from './AppTabNav';
import { Add } from '../views/Card/Add';

export const AppStackNav = StackNavigator(
  {
    Home: {
      screen: AppTabNav,
    },
    Add: { 
      screen: Add,
      navigationOptions: {
          title: '添加卡片'
      }
    },
  },
  {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6495ED',//矢车菊蓝
      }
    }
  }
);