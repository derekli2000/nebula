import {BoxProps} from '@shopify/restyle';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {Box, NebulaTheme} from '../Theme';

interface SectionProps extends BoxProps<NebulaTheme> {
  title: string;
  noPadding?: boolean;
}

export const Section: FC<SectionProps> = ({title, children, ...props}) => {
  return (
    <View>
      <Box paddingHorizontal="inset" paddingBottom="p8">
        <Text h4 style={{fontWeight: 'bold'}}>
          {title}
        </Text>
      </Box>
      <Box {...props}>{children}</Box>
    </View>
  );
};
