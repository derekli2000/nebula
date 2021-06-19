import React from 'react';
import {ScrollView} from 'react-native';
import {Carousel} from '../components/Carousel';
import {SnapCarousel} from '../components/SnapCarousel';
import {DetailTile} from '../components/Tiles/DetailTile';
import {API} from '../core/api';
import {Join} from '../ui/Layout/Join';
import {Screen} from '../ui/Layout/Screen';
import {Section} from '../ui/Layout/Section';
import {Separator} from '../ui/Separator';

export const Home = ({navigation}: any) => {
  const [{data: schedule}] = API.useSchedule('monday');
  const [{data: topAiring}] = API.useTop('anime', 1, 'airing');

  return (
    <Screen disablePadding>
      <ScrollView showsVerticalScrollIndicator={false} decelerationRate="fast">
        <Separator spacing="inset" />
        <SnapCarousel data={topAiring?.top || []} title="Top Airing" />
        <Separator spacing="p16" />
        <Carousel title="Spring 2021" data={schedule?.monday || []} />
        <Separator />
        <Carousel title="Recommended" data={schedule?.monday || []} />
        <Separator />
        <Carousel title="Manga" data={schedule?.monday || []} />
        <Separator />
        <Section title="Manga" paddingLeft="indent" paddingRight="inset">
          <Join data={schedule?.monday || []}>
            {item => (
              <DetailTile
                key={item.mal_id}
                navigation={navigation}
                item={item}
              />
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
      otherId: `item.${route.params.mal_id}.featured`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};
