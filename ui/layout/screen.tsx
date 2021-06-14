import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box} from '../theme';

interface ScreenProps {
  disableSafeArea?: boolean;
  disablePadding?: boolean;
  disableSafeArea?: boolean;
}

export const Screen: FC<ScreenProps> = ({
  children,
  disablePadding,
  disableSafeArea,
}) => {
  const padding = disablePadding ? 'none' : 'screenInset';
  const insets = useSafeAreaInsets();

  return (
    <Box
      backgroundColor="background"
      flex={1}
      padding={padding}
      style={{marginTop: disableSafeArea ? 'none' : insets.top}}>
      {children}
    </Box>
  );
};
