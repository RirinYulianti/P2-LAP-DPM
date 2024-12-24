import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CenterText from './src/components/CenterText';
import BoxRow from './src/components/BoxRow';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CenterText />
      <BoxRow />
    </SafeAreaView>
  );
};

export default App;
