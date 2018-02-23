import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import Blink from './blink';

export default class BlinkTest extends Component {
    render () {
        return (
            <View style={{
                marginTop: 74,
                marginBottom: 14,
                alignItems: 'center'
            }}>
            <Blink text = 'I love to blink' />
            <Blink text='Yes blinking is so great' />
            <Blink text='Why did they ever take this out of HTML' />
            <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}