import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {Anime} from '../types/Anime';
import {Section} from '../ui/Layout/Section';
import {Separator} from '../ui/Separator';
import {Spacing} from '../ui/Theme';
import {AnimeTile} from './Tiles/FeaturedTile';

interface CarouselProps {
  title: string;
  data: Anime[] | undefined;
}

export const Carousel = ({title, data}: CarouselProps) => {
  const navigation = useNavigation();

  return (
    <Section title={title}>
      <FlatList
        horizontal
        scrollEnabled={!!data}
        data={data || placeholder_list}
        renderItem={({item}) => <AnimeTile {...{navigation, item}} />}
        keyExtractor={(item, index) =>
          item?.mal_id.toString() || index.toString()
        }
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

const placeholder_list = [undefined, undefined, undefined];
