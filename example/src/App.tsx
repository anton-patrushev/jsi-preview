import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { multiply_bridge, multiply_cpp_JSI } from 'react-native-jsi-preview';

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});

const App = () => {
  const [resultBridge, setResultBridge] = React.useState(0);
  const [resultJSI_CPP, setResultJSI_CPP] = React.useState(0);

  React.useEffect(() => {
    const value: number = multiply_cpp_JSI(3, 7);

    setResultJSI_CPP(value);
  }, []);

  React.useEffect(() => {
    multiply_bridge(3, 7).then(setResultBridge);
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Result JSI CPP: {resultJSI_CPP}</Text>
      <Text style={styles.text}>Result Bridge: {resultBridge}</Text>
    </View>
  );
};

export default App;
