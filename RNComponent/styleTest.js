
import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import styleComponent from './styles';

export default class flexBox extends Component {
    render() {
        return (
            <View style={styleComponent.parent}>
                <Text style={styleComponent.child}>
                    Child One!
                </Text>
                <Text style={styleComponent.child}>
                    Child Two!
                </Text>
                <Text style={styleComponent.child}>
                    Child Three!
                </Text>
                <Text style={styleComponent.child}>
                    Child Four!
                </Text>
            </View>
        )
    };
}