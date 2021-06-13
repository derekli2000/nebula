import React, {FC} from 'react';
import {useTheme} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenProps {
  safeAreaDisabled?: boolean;
}

export const Screen: FC<ScreenProps> = ({children, safeAreaDisabled}) => {
  const {theme} = useTheme();
  if (safeAreaDisabled) {
    return <>{children} </>;
  }

  return (
    <SafeAreaView style={{backgroundColor: theme.colors?.background}}>
      {children}
    </SafeAreaView>
  );
};
