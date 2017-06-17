// 主屏导航
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  View
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { DrawerItems } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

// 首页
import { HomeScreen } from '../views/HomeScreen';
// 打卡页面
import { CardScreen } from '../views/CardScreen';
// 清单页面
import { ListScreen } from '../views/ListScreen';
// 记账页面
import { AccountScreen } from '../views/AccountScreen';
// 我的页面
import { MyScreen } from '../views/MyScreen';
// 登录页面
import { LoginScreen } from '../views/LoginScreen';

// 添加卡片
import { AddCard } from '../views/Card/AddCard';
// 添加清单
import { AddList } from '../views/List/AddList';



/*
 * stackNavigator
 * 四个主页面
*/
const stackOption = {
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6495ED',//矢车菊蓝
      }
  }
}

// 首页导航
const HomeStack = StackNavigator({
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
},stackOption);

// 打卡导航
const CardStack = StackNavigator({
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
                        onPress={() => navigation.navigate('AddCard') } 
                     />,
      }),
    },
    AddCard: { 
      screen: AddCard,
      navigationOptions: {
          title: '添加卡片'
      }
    },
}, stackOption);

// 清单导航
const ListStack = StackNavigator({
    List: {
      screen: ListScreen,
      navigationOptions: ({ navigation }) => ({
        title: '梦想清单',
        tabBarLabel: '清单',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={'md-list-box'} size={28} style={{ color: tintColor }} />
        ),
        headerRight: <Ionicons 
                        name={'md-add'} 
                        size={30} 
                        style={{color: '#fff', marginRight: 15}} 
                        onPress={() => navigation.navigate('AddList') } 
                     />,
      }),
    },
    AddList: {
      screen: AddList,
      navigationOptions: {
          title: '添加清单'
      }
    }
},stackOption);

// 记账导航
const AccountStack = StackNavigator({
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
    },
},stackOption);

// 我的导航
const MyStack = StackNavigator({
    MyScreen: {
      screen: MyScreen,
      navigationOptions: {
        title: '我的',
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons 
            name={'md-create'} 
            size={28} 
            style={{ color: tintColor }} 
          />
        ),
      },
    },
},stackOption);

/*
 * tabNavigator
 * 
*/
const AppTabNav = TabNavigator({
    Home: { 
      screen: HomeStack
    },
    Card: { 
      screen: CardStack
    },
    List: { 
      screen: ListStack
    },
    Account: { 
      screen: AccountStack
    }
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,

      activeTintColor: '#6495ED',
      inactiveTintColor: '#666',

      indicatorStyle: {
        backgroundColor: '#fff',
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
      }
    }
});

/*
 * drawerNavigator
 * 
*/

// 自定义侧边导航栏
const DrawerContent = (props) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>欢迎</Text>
      </View>
      <DrawerItems {...props} />
    </View>
  )
};

export const AppNav = DrawerNavigator({
  App: {
      screen: AppTabNav,
      navigationOptions: {
        title: '',
        tabBarLabel: '',
      },
  },
  MyScreen: {
    screen: MyStack,
  },
  LoginScreen: {
      screen: LoginScreen
  },
},{
  contentComponent: props => <ScrollView><DrawerContent {...props} /></ScrollView>
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});


