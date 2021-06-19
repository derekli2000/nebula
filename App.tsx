import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import {StyleProviders} from './components/StyleProviders';
import {Navigation} from './screens/Navigation';

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
