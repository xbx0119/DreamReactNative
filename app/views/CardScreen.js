          
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';

import { Card } from '../components/Card';

import { ModalPage } from '../components/ModalPage';

export class CardScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modalVisible: false
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }  

  render() {
    return (
      <View>
        <ModalPage modalVisible={this.state.modalVisible} />
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {/*TouchableHighlight只支持一个子节点*/}
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
          <TouchableHighlight onPress={() => { this.setModalVisible(true) }}><View><Card /></View></TouchableHighlight> 
        </ScrollView>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  }
});

