import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableHighlight,
    Modal
} from 'react-native';

export class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    } 

    PunchCard() {
        alert('打卡成功！');
        this._setModalVisible(false);
    }

    componentWillReceiveProps(nextProps) {
        this._setModalVisible(nextProps.modalVisible);
    }

    render() {
        return(
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => { this.PunchCard() }}
            >
                <View style={styles.modalPage}>
                    <View style={styles.modal }>
                        <View style={styles.topArea}>
                            <Text style={styles.title}>起床卡</Text> 
                        </View>           
                        <View style={styles.bottomArea}>
                            <TouchableHighlight 
                                style={styles.button}
                                onPress={() => {this._setModalVisible(false);}}
                            >
                                <Text style={styles.buttonText}>打</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalPage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(50, 50, 50, 0.7)'
    },
    modal: {
        display: 'flex',
        width: '85%',
        height: '75%',
        borderRadius: 5,
        elevation: 8,
        borderColor : '#fff',
        borderRadius: 3
    },
    topArea: {
        width: '100%',
        height: '75%',
        backgroundColor: 'lightblue',
    },
    bottomArea: {
        width: '100%',
        height: '25%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        height: 80,
        textAlignVertical: 'center',
        includeFontPadding: false,
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
    },
    button: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 40,
    },
    buttonText: {
        width: '100%',
        height: '100%',
        textAlignVertical: 'center',
        includeFontPadding: false,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    }
    

})