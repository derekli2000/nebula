import React from 'react';
import {Text} from 'react-native-elements';
import {FeaturedCarousel} from '../components/featured-carousel';
import {Screen} from '../ui/layout/screen';
import {Box} from '../ui/theme';

export const Home = () => {
  return (
    <Screen disablePadding>
      <Box paddingVertical="screenInset" flex={1}>
        <Text h1>Home</Text>
        <FeaturedCarousel />
      </Box>
    </Screen>
  );
};
