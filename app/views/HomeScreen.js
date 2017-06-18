
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';

import { ImgSwiper } from '../components/ImgSwiper';

export class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ImgSwiper />
        <Text style={styles.word}>不管脚步有多慢都不要紧{'\n'}只要你在走　总会看到进步</Text>
        <View style={styles.infoShow}>
          <View style={styles.card}>
              <Text style={styles.infoTitle}>梦想打卡</Text>
              <Text style={styles.circle}>15<Text style={styles.count}> 天</Text></Text>
          </View>
          <View style={styles.account}>
              <Text style={styles.infoTitle}>本月消费</Text>
              <Text style={styles.circle}>800<Text style={styles.count}> 元</Text></Text>
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  word: {
    width: '100%',
    fontSize: 20,
    fontFamily: '岚竹风体',
    height: 100,
    textAlign: 'center',
    lineHeight: 40,
    color: '#EB3F2F'
  },
  infoShow: {
    height: 200,
    width: '100%',
    flexDirection: 'row',
    flex: 1
  },
  card: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  account: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  infoTitle: {
    fontSize: 18,
    color: '#6495ED',
  },
  circle: {
    width: 100,
    height: 100,
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 50,
    backgroundColor: '#06B9D1' //梦想的颜色
  },
  count: {
    fontSize: 12,
  }
  
});

