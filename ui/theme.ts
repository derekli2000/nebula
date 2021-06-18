import {createBox, createTheme, useTheme} from '@shopify/restyle';
import {
  black,
  deepOrange400,
  green400,
  grey100,
  grey300,
  grey500,
  grey800,
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
  grey800: grey800,
  black: black,
  white: white,
};

type Mode = 'light' | 'dark';

const createDemux =
  (mode: Mode) =>
  <T>(options: {[key in Mode]: T}) => {
    return options[mode];
  };

const createNebulaTheme = (mode: 'light' | 'dark') => {
  const dm = createDemux(mode);

  return createTheme({
    colors: {
      ...palette,
      background: dm({light: palette.grey100, dark: palette.black}),
      backgroundSecondary: dm({light: palette.grey100, dark: palette.grey800}),
    },
    spacing: {
      none: 0,
      p4: 4,
      p8: 8,
      p12: 12,
      p16: 16,
      p20: 20,
      p24: 24,
      p32: 32,
      p64: 64,
      screenInset: 12,
    },
    breakpoints: {},
    borderRadii: {
      p8: 8,
      p16: 16,
      p32: 32,
    },
  });
};

export const DarkTheme = createNebulaTheme('dark');
export const LightTheme = createNebulaTheme('light');
export const Spacing = DarkTheme.spacing;
type Theme = typeof DarkTheme;
export const useNebulaTheme = () => useTheme<Theme>();
export const Box = createBox<Theme>();
