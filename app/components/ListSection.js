import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import { IconFont } from './IconFont';


export class ListSection extends Component {
    constructor(props) {
        super(props);
    }

    /*renderSectionHeader = ({section}) => (
        <Text style={styles.sectionHeader}>
            {section.key}
        </Text>
    )*/

    render() {
        const {navigate} = this.props.navigation;
        const renderItem = ({item}) => {  
            return (
                <TouchableHighlight 
                    onPress={() => navigate('ListContent')} 
                    underlayColor="#f0f0f0" 
                >
                    <View style={styles.listItem}>
                        <IconFont font="&#xe61d;" style={styles.itemIcon} />
                        <Text style={styles.listText}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            )
        }

        return(
            <View style={styles.sectionContainer}>
                <ScrollView>
                    <SectionList
                        renderItem = { renderItem  }
                        sections={[ // 不同section渲染相同类型的子组件
                            {key: '梦想', data: [
                                {title: 'Web前端学习', text: 'Section s1', key: '1'},
                                {title: '今日目标', text: 'Section s1', key: '2'},
                                {title: '短期目标', text: 'Section s1', key: '3'},
                                {title: '长期目标', text: 'Section s1', key: '4'},
                                {title: '最终理想', text: 'Section s1', key: '5'},
                                {title: '编程', text: 'Section s1', key: '6'},
                                {title: '看书', text: 'Section s1', key: '7'},
                                {title: '背单词', text: 'Section s1', key: '8'},
                                {title: '跑步', text: 'Section s1', key: '9'},
                                {title: '吃饭', text: 'Section s1', key: '10'},
                                {title: '约会', text: 'Section s1', key: '11'},
                                {title: '看电影', text: 'Section s1', key: '12'},
                                {title: '写作业', text: 'Section s1', key: '13'},
                            ]},
                        ]}
                    />                    
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        height: 40,
        width: '100%',
        textAlignVertical: 'center',
        fontSize: 20,
        color: '#9999FF',
        backgroundColor: '#f0f0f0',
        paddingLeft: 15
    },
    listItem: {
        height: 45,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
    },
    itemIcon: {
        height: 45,
        fontSize: 17,
        color: '#333',
        marginRight: 20,
        textAlignVertical: 'center',
    },
    listText: {
        color: '#333',
        textAlignVertical: 'center',
        fontSize: 17
    },
    sectionContainer: {
        width: '100%',
    }
})