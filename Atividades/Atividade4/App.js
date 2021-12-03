import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import Routes from './components/Routes';

export default function App() {
  return (
        // <Home />

        // <Routes></Routes>
        <SafeAreaProvider>
           <Routes />
        </SafeAreaProvider>
  );
}