import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import { IconFont } from '../../components/IconFont';

export class ListContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        const renderItem = ({item}) => {  
            return (
                <TouchableHighlight 
                    underlayColor="#f0f0f0" 
                >
                    <View style={styles.listItem}>
                        <IconFont 
                            font="&#xe603;" 
                            style={styles.itemIcon} 
                            onPress={() => alert("完成") }
                        />
                        <Text 
                            style={styles.listText}
                            onPress={() => navigate('ListDetail')} 
                        >
                            {item.title}
                        </Text>
                    </View>
                </TouchableHighlight>
            )
        }
        return (
            <View style={styles.sectionContainer}>
                <ScrollView>
                    <FlatList
                        renderItem = { renderItem  }
                        data = {[
                            {key: 'a', title: 'Node.js'}, 
                            {key: 'b', title: 'React'},
                            {key: 'c', title: 'React Native'},
                            {key: 'd', title: 'Vue'},
                            {key: 'e', title: 'Weex'},
                            {key: 'f', title: 'Webpack'},
                            {key: 'g', title: 'MongoDB'},
                        ]}
                    />                    
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff'
    },
    listItem: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0'
    },
    itemIcon: {
        height: 50,
        fontSize: 16,
        color: '#333',
        marginRight: 20,
        textAlignVertical: 'center',
    },
    listText: {
        flex: 1,
        color: '#333',
        textAlignVertical: 'center',
        fontSize: 16,
    },
    
})