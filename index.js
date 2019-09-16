import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  VrButton,
  Text,
  View,
} from 'react-360';
import { type } from 'os';



export default class hello360 extends React.Component {
  state = {
    counter: 0
  };

  _incrementCounter = () => {
    this.setState({
      counter: (this.state.counter += 1)
    });
  };





  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to my counter
          </Text>
          <VrButton onClick={this._incrementCounter}>
            <Text style={styles.greeting}>You already clicked me: {this.state.counter} times.</Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 20,
  },
});

AppRegistry.registerComponent('hello360', () => hello360);
