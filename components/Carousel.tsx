import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {Anime} from '../types/Anime';
import {Section} from '../ui/Layout/Section';
import {Separator} from '../ui/Separator';
import {Spacing} from '../ui/Theme';
import {BasicTile} from './Tiles/BasicTile';

interface CarouselProps {
  title: string;
  data: Anime[];
}

export const Carousel = ({title, data}: CarouselProps) => {
  const navigation = useNavigation();

  return (
    <Section title={title}>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <BasicTile {...{navigation, item}} />}
        keyExtractor={item => item.mal_id.toString()}
        contentContainerStyle={{
          paddingHorizontal: Spacing.indent,
        }}
        ItemSeparatorComponent={() => <Separator vertical spacing="hSep" />}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    </Section>
  );
};
