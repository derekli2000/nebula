import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {AnimeOverview} from '../types/Anime';
import {Section} from '../ui/Layout/Section';
import {Separator} from '../ui/Separator';
import {FeaturedTile} from './Tiles/FeaturedTile';

interface SnapCarouselProps {
  aspectRatio?: number;
  title: string;
  data: AnimeOverview[];
}

export const SnapCarousel = ({
  aspectRatio = 1.4,
  title,
  data,
}: SnapCarouselProps) => {
  const navigation = useNavigation();

  const {width} = useWindowDimensions();
  const imageWidth = width - 64;
  const imageHeight = imageWidth * aspectRatio;

  return (
    <Section title={title}>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <FeaturedTile {...{item, navigation, imageWidth, imageHeight}} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        snapToInterval={imageWidth + 20}
        decelerationRate="fast"
        ItemSeparatorComponent={() => <Separator vertical spacing="p20" />}
        showsHorizontalScrollIndicator={false}
      />
    </Section>
  );
};
