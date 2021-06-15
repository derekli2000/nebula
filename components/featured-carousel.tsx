import React, {useRef} from 'react';
import {Platform, StyleSheet, useWindowDimensions} from 'react-native';
import SnapCarousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Box, Spacing} from '../ui/theme';

interface FeaturedCarouselProps {
  aspectRatio?: number;
}

export const FeaturedCarousel = ({
  aspectRatio = 1.15,
}: FeaturedCarouselProps) => {
  const {width} = useWindowDimensions();

  const carousel = useRef(null);
  const data = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    'https://images.unsplash.com/photo-1623039142047-3567eb7a208d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80',
    'https://images.unsplash.com/photo-1623211514326-a47c460ea21d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1838&q=80',
  ];

  const tileWidth = width - 2 * (Spacing.screenInset + Spacing.p12);
  const tileHeight = tileWidth * aspectRatio;

  return (
    <Box borderRadius="p16" height={tileHeight}>
      <SnapCarousel
        ref={carousel}
        data={data}
        // @ts-ignore
        renderItem={({item}, parallaxProps) => (
          <Box height={tileHeight} width={tileWidth}>
            <ParallaxImage
              source={{
                uri: item,
              }}
              containerStyle={{
                flex: 1,
                marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
                backgroundColor: 'white',
                borderRadius: 8,
              }}
              style={{...StyleSheet.absoluteFillObject, resizeMode: 'cover'}}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
          </Box>
        )}
        sliderWidth={width}
        itemWidth={tileWidth}
        hasParallaxImages
      />
    </Box>
  );
};
