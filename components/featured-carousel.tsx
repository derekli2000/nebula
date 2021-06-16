import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Icon, Image, Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {AnimeOverview} from '../types/anime';
import {Seperator} from '../ui/seperator';
import {Box} from '../ui/theme';

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
  const borderRadius = 0.08 * imageWidth;

  const _renderItem = ({item}: {item: AnimeOverview; index: number}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('anime-info', item)}
      style={{overflow: 'hidden', borderRadius}}>
      <Image
        source={{
          uri: item.poster_url,
          height: imageHeight,
          width: imageWidth,
        }}
        style={{resizeMode: 'cover', height: imageHeight, width: imageWidth}}
      />
      <LinearGradient
        colors={['#00000000', '#000000']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: borderRadius / 2,
          paddingVertical: borderRadius / 2,
        }}>
        <Text
          h4
          numberOfLines={1}
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'white',
          }}>
          {item.english_title}
        </Text>
        <Box alignSelf="flex-start" paddingVertical="p4" flexDirection="row">
          <Icon name="star" />
          <Text style={{fontSize: 20, marginLeft: 4, color: 'white'}}>
            {item.score.toFixed(1)}
          </Text>
        </Box>
      </LinearGradient>
    </TouchableOpacity>
  );

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
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        snapToInterval={imageWidth}
        snapToAlignment="center"
        decelerationRate="fast"
        ItemSeparatorComponent={() => <Seperator vertical spacing="p20" />}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
};
