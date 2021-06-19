import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {AnimeOverview} from '../types/Anime';
import {Section} from '../ui/Layout/Section';
import {Separator} from '../ui/Separator';
import {BasicTile} from './Tiles/BasicTile';

interface CarouselProps {
  title: string;
  data: AnimeOverview[];
}

export const Carousel = ({title, data}: CarouselProps) => {
  const navigation = useNavigation();

  return (
    <Section title={title}>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <BasicTile {...{navigation, item}} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        ItemSeparatorComponent={() => <Separator vertical spacing="p20" />}
        showsHorizontalScrollIndicator={false}
      />
    </Section>
  );
};
