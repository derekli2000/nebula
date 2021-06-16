import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon, Image, Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {AnimeOverview} from '../../types/anime';
import {Box} from '../../ui/theme';

interface FeaturedCarouselTileProps {
  navigation: any;
  item: AnimeOverview;
  imageHeight: number;
  imageWidth: number;
}

export const FeaturedCarouselTile = ({
  item,
  navigation,
  imageWidth,
  imageHeight,
}: FeaturedCarouselTileProps) => {
  const borderRadius = imageWidth * 0.08;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('anime-info', item)}
      style={{overflow: 'hidden', borderRadius, width: imageWidth}}>
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
};
