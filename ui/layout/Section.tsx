import React, {FC} from 'react';
import {Text} from 'react-native-elements';
import {Box} from '../Theme';

interface SectionProps {
  title: string;
  noPadding?: boolean;
}

export const Section: FC<SectionProps> = ({title, children}) => {
  return (
    <Box>
      <Box paddingHorizontal="screenInset" paddingBottom="p8">
        <Text h4 style={{fontWeight: 'bold'}}>
          {title}
        </Text>
      </Box>
      {children}
    </Box>
  );
};
