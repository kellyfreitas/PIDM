import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './components/Routes';

export default function App() {
  return (

        <SafeAreaProvider> 
           <Routes />
        </SafeAreaProvider>
  );
}