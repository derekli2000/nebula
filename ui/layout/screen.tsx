import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, useNebulaTheme} from '../theme';

interface ScreenProps {
  disableSafeArea?: boolean;
  disablePadding?: boolean;
}

export const Screen: FC<ScreenProps> = ({
  children,
  disablePadding,
  disableSafeArea,
}) => {
  const theme = useNebulaTheme();
  const insets = useSafeAreaInsets();

  const padding = disablePadding ? 0 : theme.spacing.screenInset;
  return (
    <Box
      backgroundColor="background"
      flex={1}
      style={{
        padding,
        paddingTop: disableSafeArea ? padding : padding + insets.top,
      }}>
      {children}
    </Box>
  );
};
