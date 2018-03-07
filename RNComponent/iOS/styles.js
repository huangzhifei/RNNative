
import React from 'react';

import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ff99aa',
        borderWidth: 5,
        borderColor: '#0099aa',
        marginTop: 64
    },

    child: {
        flex: 1,
        borderColor: '#aa0099',
        borderWidth: 3,
        fontSize: 24,
        textAlign: 'center'
    }
});

export default styles;