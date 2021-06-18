import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import {StyleProviders} from './components/style-providers';
import {Navigation} from './navigation';

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
