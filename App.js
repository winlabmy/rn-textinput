import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.textInput}
          placeholder="Type here to translate"
          onChangeText={(text)=> this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.text}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    alignItems: 'center'           
  },
  textInput: {
    height: 50,
    fontSize: 20
  },
  text: {
    padding: 20,
    fontSize: 42 
  }
})