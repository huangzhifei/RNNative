
import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

export default class PositionTest extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                marginTop: 74,
                marginBottom: 14,
                alignItems: 'center',
                backgroundColor: '#aa99ee'
            }}>
                <Text style={{backgroundColor: '#44aaaa',
                              fontSize: 24, 
                              position: 'absolute', 
                              top: 50, 
                              left: 12,
                              bottom: 12,
                              right: 12
                            }}>
                    哈哈！！！！！
                </Text>
            </View>
        );
    }
}

