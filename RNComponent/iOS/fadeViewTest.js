
import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import FadeView from './fadeView';

export default class FadeViewTest extends Component {
   render () {
       return (
           <View style = {{flex: 1, marginTop: 64}}>
           <FadeView style = {{alignItems: 'center',  width: 250, height: 50, backgroundColor: 'powderblue'}}>
           <Text style = {{fontSize: 28, textAlign: 'center', margin: 10}}>
               Fading in
           </Text>
       </FadeView>
           </View>
       );
   }
}