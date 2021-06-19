import React from 'react';
import {Box, Spacing} from './Theme';

export interface SeparatorProps {
  vertical?: boolean;
  spacing?: keyof typeof Spacing;
  grow?: boolean;
}

export const Separator = ({vertical, grow, spacing}: SeparatorProps) => {
  let height = 0;
  let width = 0;

  if (vertical) {
    width = Spacing[spacing || 'vSep'];
  } else {
    height = Spacing[spacing || 'hSep'];
  }

  return (
    <Box
      height={height}
      width={width}
      flexBasis={height || width}
      flexGrow={grow ? 1 : 0}
      flexShrink={grow ? 1 : 0}
      alignSelf="stretch"
    />
  );
};
