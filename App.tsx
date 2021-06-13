import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './components/navigation';
import {theme} from './ui/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} useDark={!isDarkMode}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
