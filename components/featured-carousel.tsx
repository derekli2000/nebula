import {BlurView} from '@react-native-community/blur';
import React, {useRef} from 'react';
import {Platform, StyleSheet, useWindowDimensions} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import SnapCarousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Box} from '../ui/theme';

interface CarouselItem {
  url: string;
  title: string;
}

interface FeaturedCarouselProps {
  aspectRatio?: number;
  title: string;
  data: CarouselItem[];
}

export const FeaturedCarousel = ({
  aspectRatio = 1.4,
  title,
  data,
}: FeaturedCarouselProps) => {
  const {width} = useWindowDimensions();
  const carousel = useRef(null);

  const tileWidth = width - 60;
  const tileHeight = tileWidth * aspectRatio;
  const borderRadius = 0.08 * tileWidth;

  const _renderItem = (
    {item}: {item: CarouselItem; index: number},
    parallaxProps: any,
  ) => (
    // parallaxProps: any,
    <Box flex={1} position="relative" overflow="hidden" style={{borderRadius}}>
      <ParallaxImage
        source={{
          uri: item.url,
        }}
        containerStyle={{
          flex: 1,
          marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        }}
        style={{...StyleSheet.absoluteFillObject, resizeMode: 'cover'}}
        parallaxFactor={0.5}
        {...parallaxProps}
      />
      <BlurView
        blurType="dark"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: borderRadius / 2,
          paddingVertical: 8,
          // height: 60,
        }}>
        <Text h4 numberOfLines={1} style={{textTransform: 'uppercase'}}>
          {item.title}
        </Text>
        <Box
          borderRadius="p8"
          alignSelf="flex-start"
          paddingVertical="p4"
          flexDirection="row">
          <Icon name="star" />
          <Text style={{fontSize: 20, marginLeft: 4}}>10.0</Text>
        </Box>
      </BlurView>
    </Box>
  );

  return (
    <Box borderRadius="p16" height={tileHeight}>
      <Box paddingHorizontal="screenInset" paddingBottom="p8">
        <Text h3>{title}</Text>
      </Box>
      <SnapCarousel
        ref={carousel}
        data={data}
        // @ts-ignore
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={tileWidth}
        hasParallaxImages
        decelerationRate="fast"
      />
    </Box>
  );
};
