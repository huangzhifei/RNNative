
import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

import styleTest from './styleTest';
import flexTest from './flexBoxTest';
import positionTest from './positionTest';
import layoutTest from './layoutTest';

AppRegistry.registerComponent('RNStyleTest', () => styleTest);
AppRegistry.registerComponent('RNFlexTest', () => flexTest);
AppRegistry.registerComponent('RNPositionTest', () => positionTest);
AppRegistry.registerComponent('RNLayoutTest', () => layoutTest);