import React from 'react';
import {View} from 'react-native';
import {Screen} from '../ui/layout/screen';
import {NonFeaturedCarousel} from '../ui/layout/non-featured-carousel';
import { Text } from 'react-native-elements';

export const Home = () => {
  return (
    <Screen>
      <NonFeaturedCarousel title="Recommended"/>
      
    </Screen>
  );
};
