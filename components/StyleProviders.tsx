import {ThemeProvider} from '@shopify/restyle';
import React, {FC} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider as ElementsProvider} from 'react-native-elements';
import {DarkTheme, LightTheme} from '../ui/Theme';

export const StyleProviders: FC = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ElementsProvider useDark={isDarkMode}>{children}</ElementsProvider>
    </ThemeProvider>
  );
};
