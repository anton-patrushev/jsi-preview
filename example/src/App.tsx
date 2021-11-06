import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { multiply } from 'react-native-jsi-preview';

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});

const App = () => {
  const [result, setResult] = React.useState(0);

  React.useEffect(() => {
    const value: number = global.multiply(3, 7);
    setResult(value);
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

export default App;
