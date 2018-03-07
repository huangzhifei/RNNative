
import React, { Component } from 'react';

import { 
    Text, 
    TextInput, 
    View 
} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10, backgroundColor: '#FFFFFF'}}>
        <TextInput
          style={{height: 40, marginTop: 74}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

