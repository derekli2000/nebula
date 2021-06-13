import React, {useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './components/navigation';
import {createNebulaTheme} from './ui/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useMemo(() => createNebulaTheme(isDarkMode), [isDarkMode]);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} useDark={isDarkMode}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
