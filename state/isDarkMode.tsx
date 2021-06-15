import {Appearance} from 'react-native';
import {atom} from 'recoil';

export const isDarkModeAtom = atom({
  key: 'isDarkMode',
  default: Appearance.getColorScheme() === 'dark',
});
