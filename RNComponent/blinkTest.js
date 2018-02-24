import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import Blink from './blink';

export default class BlinkTest extends Component {
    render () {
        return (
            <View style = {{
                flex: 1,
                marginTop: 74,
                marginBottom: 14,
                alignItems: 'center',
                backgroundColor: 'yellow'
            }}>
                <View style={{flex: 1, backgroundColor: 'skyblue'}}> 
                    <Blink text='Yes blinking is so great' /> 
                </View>

                <View style={{flex: 2, backgroundColor: 'powderblue'}}>
                    <Blink text='Why did they ever take this out of HTML' />
                </View>

                <View style={{flex: 2, backgroundColor: 'steelblue'}}>
                    <Blink text='Look at me look at me look at me' />
                </View>

            </View>
        );
    }
}