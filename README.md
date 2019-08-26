# masks Usage:

```
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import {
  isValid,
  format,
  mask,
  unmask,
} from './src/cpf';

export default class MaskUsage extends Component {
  state = {
    cpf: '',
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({unmask(text)})}
          value={mask(this.state.text)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          Valid? {isValid(this.state.text)}
        </Text>
      </View>
    );
  }
}
```
