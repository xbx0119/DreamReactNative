
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';

export class ListDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.listTitle}>Ｗeb前端开发</Text>
        <TextInput multiline={true} underlineColorAndroid="transparent" style={styles.input}>

        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  listTitle: {
    width: '100%',
    height: 40,
    textAlignVertical: 'center',
    fontSize: 16,
    paddingLeft: 10,
    color: '#9999FF',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  input: {
    width: '100%',
    flex: 1,
    textAlignVertical: 'top',
    padding: 10,
    color: '#666',
    fontSize: 14
  }

});

