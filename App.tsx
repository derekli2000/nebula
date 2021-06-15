import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import {Navigation} from './components/navigation';
import {StyleProviders} from './components/style-providers';

const App = () => {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <StyleProviders>
          <Navigation />
        </StyleProviders>
      </RecoilRoot>
    </SafeAreaProvider>
  );
};

export default App;
