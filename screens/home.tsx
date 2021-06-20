import React from 'react';
import {ScrollView} from 'react-native';
import {Carousel} from '../components/Carousel';
import {SnapCarousel} from '../components/SnapCarousel';
import {API} from '../core/api';
import {getSemanticDay} from '../core/dates';
import {Screen} from '../ui/Layout/Screen';
import {Separator} from '../ui/Separator';

export const Home = () => {
  const [{data: topAiring}] = API.useTop('anime', 1, 'airing');
  const [{data: topUpcoming}] = API.useTop('anime', 1, 'upcoming');
  const [{data: seasonalAnime}] = API.useCurrentSeason();
  const [{data: latestEpisodes}] = API.useSchedule(getSemanticDay());

  return (
    <Screen disablePadding>
      <ScrollView showsVerticalScrollIndicator={false} decelerationRate="fast">
        <Separator spacing="inset" />
        <SnapCarousel data={topAiring} title="Top Airing" />
        <Separator spacing="p16" />
        <Carousel title="Current Season" data={seasonalAnime} />
        <Separator />
        <Carousel title="Today's Updates" data={latestEpisodes} />
        <Separator />
        <Carousel title="Top Upcoming" data={topUpcoming} />
        <Separator />
        {/* <Section title="Top Upcoming" paddingLeft="indent" paddingRight="inset">
          <Join data={topUpcoming}>
            {item => (
              <DetailTile
                key={item.mal_id}
                navigation={navigation}
                item={item}
              />
            )}
          </Join>
        </Section>
        <Separator /> */}
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
