
import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';
/*
 flex 布局样式完整描述，见下面的链接
http://reactnative.cn/docs/0.48/layout-props.html
**/
export default class flexBox extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                marginTop: 74,
                marginBottom: 14,
                alignItems: 'center'
            }}>
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'red'
                }} />

                <View style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'skyblue'
                }} />

                <View style={{
                    width: 70,
                    height:70,
                    backgroundColor: 'steelblue'
                }} />
            </View>
        )
    }
}