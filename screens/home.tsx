import React from 'react';
import {ScrollView} from 'react-native';
import {Carousel} from '../components/Carousel';
import {SnapCarousel} from '../components/SnapCarousel';
import {DetailTile} from '../components/Tiles/DetailTile';
import {OverviewData} from '../data/overviews';
import {Join} from '../ui/Layout/Join';
import {Screen} from '../ui/Layout/Screen';
import {Section} from '../ui/Layout/Section';
import {Separator} from '../ui/Separator';

export const Home = ({navigation}: any) => {
  return (
    <Screen disablePadding>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Separator spacing="screenInset" />
        <SnapCarousel data={OverviewData} title="Top Airing" />
        <Separator spacing="p16" />
        <Carousel title="Spring 2021" data={OverviewData} />
        <Separator />
        <Carousel title="Recommended" data={OverviewData} />
        <Separator />
        <Carousel title="Manga" data={OverviewData} />
        <Separator />
        <Section title="Manga">
          <Join data={OverviewData}>
            {item => (
              <DetailTile key={item.id} navigation={navigation} item={item} />
            )}
          </Join>
        </Section>
        <Separator />
      </ScrollView>
    </Screen>
  );
};

Home.sharedElements = (_: any, route: any, showing: boolean) => {
  if (showing) {
    return [];
  }

  return [
    {
      id: route.params.fromNodeId,
      otherId: `item.${route.params.id}.featured`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};
