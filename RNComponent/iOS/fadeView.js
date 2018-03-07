
import React, {Component} from 'react';

import {
    View,
    Text,
    Animated,
    Easing
} from 'react-native';

export default class FadeView extends Component {
   constructor (props) {
       super (props);
       this.state = {
           fadeAnimation: new Animated.Value(0) // 透明度初始值设为 0
       };
   }

  componentDidMount () {
     Animated.timing (
         this.state.fadeAnimation, { toValue: 1, duration: 2000, delay: 500 }
     ).start();
  }

  render () {
     return (
         <Animated.View style = {{
             ...this.props.style,
             opacity: this.state.fadeAnimation
         }}>
         { this.props.children }
         </Animated.View>
     );
  }
}