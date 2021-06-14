import React from 'react';
import {View} from 'react-native';
import {Screen} from '../ui/layout/screen';
import {NonFeaturedCarousel} from '../ui/layout/non-featured-carousel';
import { Text } from 'react-native-elements';

export const Home = () => {
  return (
    <Screen>
      <Text h3 style={{margin:10}}>Currently Airing</Text>
      <NonFeaturedCarousel />
    </Screen>
  );
};
