import {createBox, createText, createTheme, useTheme} from '@shopify/restyle';
import {
  black,
  deepOrange400,
  green400,
  green800,
  grey100,
  grey300,
  grey500,
  indigo400,
  lightBlue400,
  pink400,
  red400,
  white,
  yellow400,
} from './colors';

const palette = {
  red: red400,
  pink: pink400,
  purple: indigo400,
  blue: lightBlue400,
  green: green400,
  yellow: yellow400,
  orange: deepOrange400,
  grey100: grey100,
  grey300: grey300,
  grey500: grey500,
  grey800: green800,
  black: black,
  white: white,
};

export const theme = createTheme({
  colors: {
    ...palette,
    background: palette.black,
    backgroundSecondary: palette.grey800,
  },
  spacing: {
    none: 0,
    p4: 4,
    p8: 8,
    p12: 12,
    p16: 16,
    screenInset: 12,
  },
  breakpoints: {},
  borderRadii: {
    p8: 8,
    p16: 16,
  },
  fonts: {},
});

type Theme = typeof theme;
export const useNebulaTheme = () => useTheme<Theme>();

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
