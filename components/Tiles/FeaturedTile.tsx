import {nanoid} from 'nanoid';
import React, {useRef} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import Shimmer from 'react-native-shimmer';
import {SharedElement} from 'react-navigation-shared-element';
import {useDelayedState} from '../../core/hooks/useDelay';
import {Anime} from '../../types/Anime';
import {Box} from '../../ui/Theme';

interface FeaturedTileProps {
  navigation: any;
  item?: Anime;
  imageHeight?: number;
  imageWidth?: number;
  size?: 's' | 'l';
}

export const AnimeTile = ({
  item,
  navigation,
  imageWidth = 87,
  imageHeight = 134,
  size = 's',
}: FeaturedTileProps) => {
  const borderRadius = imageWidth * 0.08;
  const fromNodeId = useRef(nanoid()).current;

  const onPress = () => {
    navigation.navigate('anime-info', {...item, fromNodeId});
  };

  if (!item) {
    return <AnimeTile.Skeleton {...{imageHeight, imageWidth, borderRadius}} />;
  }

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
      <Box paddingTop="p4">
        <Text
          h4={size === 's'}
          h3={size === 'l'}
          h4Style={{fontSize: 14, color: 'white'}}
          h3Style={{fontSize: 18, color: 'white'}}
          numberOfLines={size === 's' ? 2 : 1}>
          {item.title}
        </Text>
        {size === 'l' && (
          <Box alignSelf="flex-start" paddingVertical="p4" flexDirection="row">
            <Icon name="star" />
            <Text style={{fontSize: 20, marginLeft: 4, color: 'white'}}>
              {item.score?.toFixed(1) ?? 'N/A'}
            </Text>
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};

interface FeaturedTileSkeletonProps {
  imageHeight: number;
  imageWidth: number;
  borderRadius: number;
}

AnimeTile.Skeleton = ({
  imageHeight,
  imageWidth,
  borderRadius,
}: FeaturedTileSkeletonProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const animating = useDelayedState(false, true, 200);

  return (
    <Shimmer animating={animating} opacity={0.7} animationOpacity={1}>
      <Box
        style={{borderRadius}}
        width={imageWidth}
        height={imageHeight}
        backgroundColor="backgroundSecondary"
      />
    </Shimmer>
  );
};
