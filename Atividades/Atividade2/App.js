import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './components/Cabecalho.jsx';
import Corpo from './components/Corpo.jsx';
import Disciplina from './components/Disciplina.jsx';

export default function App() {
  return (
    <View style={styles.container}>
       <Cabecalho 
          nome='Rayane Kelly'
          curso='DD'
        />
        <Corpo />
        <Disciplina disciplina='IHC' />
        <Disciplina disciplina='PIW' />
        <Disciplina disciplina='LMS' />
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
