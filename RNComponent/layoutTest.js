
import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class LayoutTest extends Component {
    render() {
        return (
            <Text style={{backgroundColor: '#aa88FF', marginTop: 74, flex: 0}}>
            Hello !!!!!!!!
            </Text>
        );
    }
}

const style = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        position: 'absolute',
        top: 64
    },

    base: {
        borderColor: '#000000',
        borderWidth: 4
    },

    topBox: {
        flexDirection: 'row',
        flex: 5
    },

    leftCol: {
        flex: 2
    },

    bottomBox: {
        flex: 2,
        flexDirection: 'row'
    },

    bottomRight: {
        flex: 2,
        flexDirection: 'column'
    },

    cellOne: {
        flex: 1,
        borderBottomWidth: 15
    },

    cellTwo: {
        flex: 3
    },

    cellThree: {
        backgroundColor: '#FF0000',
        flex: 5
    },

    cellFour: {
        flex: 3,
        backgroundColor: '#0000FF'
    },

    cellFive: {
        flex: 6
    },

    cellSix: {
        flex: 1
    },

    cellSeven: {
        flex: 1,
        backgroundColor: '#FFFF00'
    }
});

