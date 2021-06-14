import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider as ElementsProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './components/navigation';
import {theme} from './ui/theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <ElementsProvider useDark={true}>
          <Navigation />
        </ElementsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
