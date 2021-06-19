import React from 'react';
import {Box, Spacing} from './Theme';

export interface SeparatorProps {
  vertical?: boolean;
  spacing?: keyof typeof Spacing;
  grow?: boolean;
}

export const Separator = ({
  vertical,
  grow,
  spacing = 'p12',
}: SeparatorProps) => {
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
      flexGrow={grow ? 1 : 0}
      flexShrink={grow ? 1 : 0}
      alignSelf="stretch"
    />
  );
};