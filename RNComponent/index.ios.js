
import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';

import styleTest from './iOS/styleTest';
import flexTest from './iOS/flexBoxTest';
import positionTest from './iOS/positionTest';
import layoutTest from './iOS/layoutTest';
import videoTest from './iOS/video/index';
import photoTest from './iOS/photoTest';
import blinkTest from './iOS/blinkTest';
import pizzaTranslatorTest from './iOS/pizzaTranslator';
import listViewTest from './iOS/listView';
import fadeViewTest from './iOS/fadeViewTest'

AppRegistry.registerComponent('RNStyleTest', () => styleTest);
AppRegistry.registerComponent('RNFlexTest', () => flexTest);
AppRegistry.registerComponent('RNPositionTest', () => positionTest);
AppRegistry.registerComponent('RNLayoutTest', () => layoutTest);
AppRegistry.registerComponent('RNVideoTest', () => videoTest);
AppRegistry.registerComponent('RNPhotoTest', () => photoTest);
AppRegistry.registerComponent('RNBlinkTest', () => blinkTest);
AppRegistry.registerComponent('RNPizzaTranslatorTest', () => pizzaTranslatorTest);
AppRegistry.registerComponent('RNListViewTest', () => listViewTest);
AppRegistry.registerComponent('RNFadeViewTest', () => fadeViewTest);
