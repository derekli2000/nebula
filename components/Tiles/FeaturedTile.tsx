import {nanoid} from 'nanoid';
import React, {useRef} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {SharedElement} from 'react-navigation-shared-element';
import {Anime} from '../../types/Anime';
import {Box} from '../../ui/Theme';

interface FeaturedTileProps {
  navigation: any;
  item: Anime;
  imageHeight: number;
  imageWidth: number;
}

export const FeaturedTile = ({
  item,
  navigation,
  imageWidth,
  imageHeight,
}: FeaturedTileProps) => {
  const borderRadius = imageWidth * 0.08;
  const fromNodeId = useRef(nanoid()).current;

  const onPress = () => {
    navigation.navigate('anime-info', {...item, fromNodeId});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{overflow: 'hidden', borderRadius, width: imageWidth}}>
      <SharedElement id={fromNodeId}>
        <Image
          source={{
            uri: item.image_url,
          }}
          style={{
            height: imageHeight,
            width: imageWidth,
            borderRadius,
          }}
          resizeMode="cover"
        />
      </SharedElement>
      <LinearGradient
        colors={['#00000000', '#000000', '#000000']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          // borderBottomLeftRadius: borderRadius,
          // borderBottomRightRadius: borderRadius,
          paddingHorizontal: borderRadius / 2,
          paddingVertical: borderRadius,
          // flex: 1,
          // backgroundColor: 'red',
        }}>
        <Text
          h4
          numberOfLines={1}
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'white',
          }}>
          {item.title}
        </Text>
        <Box alignSelf="flex-start" paddingVertical="p4" flexDirection="row">
          <Icon name="star" />
          <Text style={{fontSize: 20, marginLeft: 4, color: 'white'}}>
            {item.score?.toFixed(1) ?? 'N/A'}
          </Text>
        </Box>
      </LinearGradient>
    </TouchableOpacity>
  );
};
