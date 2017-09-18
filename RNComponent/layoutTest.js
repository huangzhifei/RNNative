
import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class LayoutTest extends Component {
    render() {
        return (
            <View style={style.parent}>

                <View style={style.leftCol}>
                    <View style={[style.cellOne, style.base]}>
                        <Text style={{fontSize: 28, fontWeight: "bold", textAlign: 'center'}}>
                            1
                        </Text>
                    </View>
                    <View style={[style.cellTwo, style.base]}>
                        <Text style={{fontSize: 28, fontWeight: "bold"}}>
                            2
                        </Text>
                    </View>
                    <View style={[style.cellThree, style.base]}>
                        <Text style={{fontSize: 28, fontWeight: "bold"}}>
                            3
                        </Text>
                    </View>
                </View>

                <View style={[style.rightCol]}>
                    <View style={[style.cellFour,style.base]}>
                        <Text style={{fontSize: 28, fontWeight: "bold"}}>
                            4
                        </Text>
                    </View>
                    <View style={[style.rightBottom]}>
                        <View style={[style.cellFive, style.base]}>
                            <Text style={{fontSize: 28, fontWeight: "bold"}}>
                                5
                            </Text>
                        </View>
                        <View style={[{flex: 1}, {flexDirection: 'column'}]}>
                            <View style={[style.cellSix, style.base]}>
                                <Text style={{fontSize: 28, fontWeight: "bold"}}>
                                    6
                                </Text>
                            </View>
                            <View style={[style.cellSeven, style.base]}>
                                <Text style={{fontSize: 28, fontWeight: "bold"}}>
                                    7
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        position: 'absolute',
        top: 64,
        left: 10,
        right: 10,
        bottom: 10
    },

    base: {
        borderColor: '#000000',
        borderWidth: 4,
        justifyContent: 'center', 
        alignItems:'center'
    },

    leftCol: {
        flex: 1,
        flexDirection: 'column'
    },

    rightCol: {
        flex: 2,
        flexDirection: 'column'
    },

    rightBottom: {
        flex: 2,
        flexDirection: 'row'
    },

    cellOne: {
        flex: 1,
        borderBottomWidth: 12,
        backgroundColor: '#FF0000'
    },

    cellTwo: {
        flex: 3,
        backgroundColor: '#00FF00',
    },

    cellThree: {
        backgroundColor: '#0000FF',
        flex: 2
    },

    cellFour: {
        backgroundColor: '#9999ff',
        flex: 4,
    },

    cellFive: {
        flex: 3,
        backgroundColor: '#6600FF',
    },

    cellSix: {
        flex: 1,
        backgroundColor: '#5FB03D'
    },

    cellSeven: {
        flex: 1,
        backgroundColor: '#EADE2C'
    }
});

