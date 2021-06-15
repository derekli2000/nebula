import React from 'react';
import {Text} from 'react-native-elements';
import {useRecoilState} from 'recoil';
import {FeaturedCarousel} from '../components/featured-carousel';
import {isDarkModeAtom} from '../state/isDarkMode';
import DarkModeSwitch from '../ui/inputs/dark-mode-switch/dark-mode-switch';
import {Screen} from '../ui/layout/screen';
import {NonFeaturedCarousel} from '../ui/layout/non-featured-carousel';
import { Text } from 'react-native-elements';
import {Box} from '../ui/theme';

export const Home = () => {
  const [darkMode, setDarkMode] = useRecoilState(isDarkModeAtom);

  return (
    <Screen disablePadding>
      <Box
        justifyContent="space-between"
        flexDirection="row"
        paddingHorizontal="screenInset"
        paddingBottom="p8"
        alignItems="flex-end">
        <Text h4>Browse</Text>
        <DarkModeSwitch value={darkMode} onChange={val => setDarkMode(val)} />
      </Box>
      <FeaturedCarousel />
      <NonFeaturedCarousel title="Recommended"/>
    </Screen>
  );
};
