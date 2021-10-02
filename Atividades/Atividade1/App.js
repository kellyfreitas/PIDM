import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Aluna from './components/Aluna';

export default function App() {
  return (
    <View style={styles.container}>
      <Aluna />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
