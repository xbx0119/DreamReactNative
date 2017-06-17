// 主屏导航
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

// 首页
import { HomeScreen } from '../views/HomeScreen';
// 打卡页面
import { CardScreen } from '../views/CardScreen';
// 清单页面
import { ListScreen } from '../views/ListScreen';
// 记账页面
import { AccountScreen } from '../views/AccountScreen';


export const AppTabNav = TabNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
        title: '梦想助手',
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons 
            name={'md-home'} 
            size={28} 
            style={{ color: tintColor }} 
          />
        ),
      },
    },
    Card: { 
      screen: CardScreen,
      navigationOptions: ({ navigation }) => ({
        title: '梦想打卡',
        tabBarLabel: '打卡',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={'md-card'} size={28} style={{ color: tintColor }} />
        ),
        headerRight: <Ionicons 
                        name={'md-add'} 
                        size={30} 
                        style={{color: '#fff', marginRight: 15}} 
                        onPress={() => navigation.navigate('Add') } 
                     />
      }),
    },
    List: { 
      screen: ListScreen,
      navigationOptions: {
        title: '梦想清单',
        tabBarLabel: '清单',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons 
            name={'md-list-box'} 
              size={28} 
              style={{ color: tintColor }} 
          />
        ),
      },
    },
    Account: { 
      screen: AccountScreen,
      navigationOptions: {
        title: '记账',
        tabBarLabel: '记账',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons 
            name={'md-create'} 
            size={28} 
            style={{ color: tintColor }} 
          />
        ),
      },
    }
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,

      activeTintColor: '#6495ED',
      inactiveTintColor: '#666',

      indicatorStyle: {
        backgroundColor: 'none',
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
      }
    }
  }
);

