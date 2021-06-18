import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {AnimeOverview} from '../../types/anime';
import {Seperator} from '../../ui/seperator';
import {Box} from '../../ui/theme';
import {NonFeaturedTile} from './non-featured-tile';

interface NonFeaturedCarouselProps {
  title: string;
  data: AnimeOverview[];
}

export const NonFeaturedCarousel = ({
  title,
  data,
}: NonFeaturedCarouselProps) => {
  const navigation = useNavigation();

  return (
    <Box>
      <Box paddingHorizontal="screenInset" paddingBottom="p8">
        <Text h4 style={{fontWeight: 'bold'}}>
          {title}
        </Text>
      </Box>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <NonFeaturedTile {...{navigation, item}} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        ItemSeparatorComponent={() => <Seperator vertical spacing="p20" />}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
};
