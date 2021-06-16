import React from 'react';
import {ScrollView} from 'react-native';
import {FeaturedCarousel} from '../components/featured-carousel';
import {NonFeaturedCarousel} from '../components/non-featured-carousel';
import {OverviewData} from '../data/overviews';
import {Screen} from '../ui/layout/screen';
import {Seperator} from '../ui/seperator';

export const Home = () => {
  return (
    <Screen disablePadding>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Seperator spacing="screenInset" />
        <FeaturedCarousel data={OverviewData} title="Top Airing" />
        <Seperator spacing="p16" />
        <NonFeaturedCarousel title="Spring 2021" data={OverviewData} />
        <Seperator />
        <NonFeaturedCarousel title="Recommended" data={OverviewData} />
        <Seperator />
        <NonFeaturedCarousel title="Manga" data={OverviewData} />
        <Seperator />
      </ScrollView>
    </Screen>
  );
};
