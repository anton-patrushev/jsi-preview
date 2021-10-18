import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import { multiply } from '../src/index';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#000',
    padding: 10,
  },
  label: {
    color: '#FFF',
  },
  displayText: {
    margin: 30,
  },
});

function getRandomInt(max: number = 10) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const [value, setValue] = React.useState('?');

  const [a, setA] = React.useState(2);
  const [b, setB] = React.useState(3);

  const randomizeABvalues = () => {
    setValue('?');
    setA(getRandomInt(20));
    setB(getRandomInt(20));
  };

  const calculateNewValue = async () => {
    const newValue = await multiply(a, b);

    setValue(newValue.toString());
  };

  const textToDisplay = `${a} * ${b} = ${value}`;

  return (
    <View style={styles.screen}>
      <TouchableNativeFeedback onPress={randomizeABvalues}>
        <View style={styles.button}>
          <Text style={styles.label}>Randomize new values</Text>
        </View>
      </TouchableNativeFeedback>

      <Text style={styles.displayText}>{textToDisplay}</Text>

      <TouchableNativeFeedback onPress={calculateNewValue}>
        <View style={styles.button}>
          <Text style={styles.label}>Calculate</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default App;
