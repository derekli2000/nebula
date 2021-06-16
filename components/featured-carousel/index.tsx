import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-elements';
import {AnimeOverview} from '../../types/anime';
import {Seperator} from '../../ui/seperator';
import {Box} from '../../ui/theme';
import {FeaturedCarouselTile} from './featured-carousel-tile';

interface FeaturedCarouselProps {
  aspectRatio?: number;
  title: string;
  data: AnimeOverview[];
}

export const FeaturedCarousel = ({
  aspectRatio = 1.4,
  title,
  data,
}: FeaturedCarouselProps) => {
  const navigation = useNavigation();

  const {width} = useWindowDimensions();
  const imageWidth = width - 64;
  const imageHeight = imageWidth * aspectRatio;

  return (
    <Box borderRadius="p16">
      <Box paddingHorizontal="screenInset" paddingBottom="p8">
        <Text h4 style={{fontWeight: 'bold'}}>
          {title}
        </Text>
      </Box>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <FeaturedCarouselTile
            {...{item, navigation, imageWidth, imageHeight}}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        snapToInterval={imageWidth + 20}
        decelerationRate="fast"
        ItemSeparatorComponent={() => <Seperator vertical spacing="p20" />}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
};
