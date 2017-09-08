/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,    //注册
        StyleSheet, //样式
        Text,       //文本组件
        View,       //视图组件
        Image
} from 'react-native';

export default class RNNativeFirst extends Component {
    render() {
        console.log('<<<<');
        return (
                <View style={styles.container}>
                <Text style={styles.welcome}>
                Hello React Native! huang
                </Text>
                <Text style={styles.instructions}>
                To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
                </Text>
                
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#F5FCFF',
                                 },
                                 welcome: {
                                 fontSize: 20,
                                 textAlign: 'center',
                                 margin: 10,
                                 },
                                 instructions: {
                                 textAlign: 'center',
                                 color: '#333333',
                                 marginBottom: 5,
                                 },
                                 });
//注意这里的名字需要和项目名字一致
AppRegistry.registerComponent('RNNative', () => RNNativeFirst);
