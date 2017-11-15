import React from 'react';
import { View, Text } from 'react-native';

class About extends React.Component {
  render () {
    return(
      <View style={{flex: 1, alignItems: 'center', padding: 20}}>
        <Text style={{fontSize: 20}}> Ola, Somos um grupo criado para fomentar o uso do framework Ruby on Rails</Text>
      </View>
    )
  }
}

export default About;
