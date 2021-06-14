import React, {FC} from 'react';
import {useTheme} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenProps {
  safeAreaDisabled?: boolean;
}

export const Screen: FC<ScreenProps> = ({children}) => {
  const {theme} = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors?.background,
        flex: 1,
      }}>
      {children}
    </SafeAreaView>
  );
};
