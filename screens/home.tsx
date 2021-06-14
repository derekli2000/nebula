import React from 'react';
import {View} from 'react-native';
import {Screen} from '../ui/layout/screen';
import {NonFeaturedCarousel} from '../ui/layout/non-featured-carousel';

export const Home = () => {
  return (
    <Screen>
      <NonFeaturedCarousel />
      <NonFeaturedCarousel />
    </Screen>
  );
};
