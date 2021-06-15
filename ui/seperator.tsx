import React from 'react';
import {Box, Spacing} from './theme';

interface SeperatorProps {
  vertical?: boolean;
  spacing?: keyof typeof Spacing;
}

export const Seperator = ({vertical, spacing = 'p20'}: SeperatorProps) => {
  let height = 0;
  let width = 0;

  if (vertical) {
    width = Spacing[spacing];
  } else {
    height = Spacing[spacing];
  }

  return (
    <Box
      height={height}
      width={width}
      flexBasis={Spacing[spacing]}
      flexGrow={0}
      flexShrink={0}
      alignSelf="stretch"
    />
  );
};
