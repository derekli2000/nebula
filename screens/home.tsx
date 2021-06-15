import React from 'react';
import {Text} from 'react-native-elements';
import {FeaturedCarousel} from '../components/featured-carousel';
import {NonFeaturedCarousel} from '../components/non-featured-carousel';
import {Screen} from '../ui/layout/screen';
import {Box} from '../ui/theme';

export const Home = () => {
  // const [darkMode, setDarkMode] = useRecoilState(isDarkModeAtom);

  return (
    <Screen disablePadding>
      <Box
        justifyContent="center"
        flexDirection="row"
        paddingHorizontal="screenInset"
        paddingBottom="p8"
        alignItems="flex-end">
        <Text h2>nebula</Text>
        {/* <DarkModeSwitch value={darkMode} onChange={val => setDarkMode(val)} /> */}
      </Box>
      <FeaturedCarousel />
      <NonFeaturedCarousel title="Recommended" />
    </Screen>
  );
};
