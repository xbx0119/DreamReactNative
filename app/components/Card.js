import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';


export class Card extends Component { 

    render() {
        return(
            <View style={styles.card} >
                <Image source={require('../public/images/g4.jpg')} style={styles.cardImg} />
                <Text style={styles.cardTitle}>早起</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 130,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 10,
        elevation: 5,
        borderColor : '#fff',
        borderRadius: 3
    },
    cardImg: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    cardTitle: {
        width: '100%',
        height: 30,
        lineHeight: 25,
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        backgroundColor: '#cecece',
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    }
})