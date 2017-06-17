import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

export class ImgSwiper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }

    render() {
        if(this.state.swiperShow){ 
            return(
                <Swiper style={styles.imgWrapper}  height={200} 
                    showsButtons={true} autoplay={true}
                >
                    <View style={styles.imgView}>
                        <Image source={ require('../public/images/banner1.jpg')} style={styles.bannerImg} />
                    </View>
                    <View style={styles.imgView}>
                        <Image source={ require('../public/images/banner2.jpg')} style={styles.bannerImg} />
                    </View>
                    <View style={styles.imgView}>
                        <Image source={ require('../public/images/banner3.jpg')} style={styles.bannerImg} />
                    </View>
                    <View style={styles.imgView}>
                        <Image source={ require('../public/images/banner4.jpg')} style={styles.bannerImg} />
                    </View>       
                </Swiper>
            )
        }else {
            return (
                <View style={{height:200}}>
                        <Image source={ require('../public/images/banner1.jpg')} style={styles.bannerImg} />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    imgWrapper: {
        width: '100%',
        height: 200,
    },
    imgView: {
        flex: 1,
        height: 200,
    },
    bannerImg: {
        width: '100%',
        height: 200,
        flex: 1
    }
})