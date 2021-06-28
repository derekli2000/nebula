import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, useWindowDimensions} from 'react-native';
import {Anime} from '../types/Anime';
import {Section} from '../ui/Layout/Section';
import {Separator} from '../ui/Separator';
import {Spacing} from '../ui/Theme';
import {AnimeTile} from './Tiles/FeaturedTile';

interface SnapCarouselProps {
  aspectRatio?: number;
  title: string;
  data: Anime[] | undefined;
}

export const SnapCarousel = ({
  aspectRatio = 1.4,
  title,
  data,
}: SnapCarouselProps) => {
  const navigation = useNavigation();

  const {width} = useWindowDimensions();
  const imageWidth = width - 2 * Spacing.indent;
  const imageHeight = imageWidth * aspectRatio;

  return (
    <Section title={title}>
      <FlatList
        horizontal
        scrollEnabled={!!data}
        data={data || placeholder_list}
        renderItem={({item}) => (
          <AnimeTile
            size="l"
            {...{item, navigation, imageWidth, imageHeight}}
          />
        )}
        keyExtractor={(item, index) =>
          item?.mal_id.toString() || index.toString()
        }
        contentContainerStyle={{
          paddingHorizontal: Spacing.indent,
        }}
        snapToInterval={imageWidth + Spacing.hSep}
        decelerationRate="fast"
        ItemSeparatorComponent={() => <Separator vertical spacing="hSep" />}
        showsHorizontalScrollIndicator={false}
      />
    </Section>
  );
};

const placeholder_list = [undefined, undefined, undefined];
