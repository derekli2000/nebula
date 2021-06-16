import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {Image, Text} from 'react-native-elements';
import {AnimeOverview} from '../types/anime';
import {Seperator} from '../ui/seperator';
import {Box} from '../ui/theme';

interface NonFeaturedCarouselProps {
  title: string;
  data: AnimeOverview[];
}

export const NonFeaturedCarousel = ({
  title,
  data,
}: NonFeaturedCarouselProps) => {
  const navigation = useNavigation();

  const _renderItem: ListRenderItem<typeof data[number]> = ({item}) => {
    return (
      <Box width={87}>
        <Image
          source={{uri: item.poster_url}}
          style={{height: 134, borderRadius: 8}}
          onPress={() => navigation.navigate('anime-info', item)}
        />
        <Text style={{marginTop: 4}} numberOfLines={2}>
          {item.english_title}
        </Text>
      </Box>
    );
  };

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
        renderItem={_renderItem}
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
