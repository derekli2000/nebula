import React, {FC} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import Animated, {
  Extrapolate,
  interpolateNode,
  useValue,
} from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import {Screen} from './Screen';

interface StretchyScrollViewProps {
  imageID: string;
  imageURL: string;
}

export const StretchyScrollView: FC<StretchyScrollViewProps> = ({
  imageID,
  imageURL,
  children,
}) => {
  const scrollY = useValue(0);
  const {width: IMAGE_WIDTH} = useWindowDimensions();
  const IMAGE_HEIGHT = 350;

  return (
    <Screen disableSafeArea disablePadding>
      <SharedElement id={imageID}>
        <Animated.Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width: '100%',
            height: IMAGE_HEIGHT,
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
            transform: [
              {
                translateY: interpolateNode(scrollY, {
                  inputRange: [0, IMAGE_WIDTH],
                  outputRange: [0, -IMAGE_WIDTH],
                  extrapolate: Extrapolate.CLAMP,
                }),
                scale: interpolateNode(scrollY, {
                  inputRange: [-IMAGE_WIDTH * 2, 0],
                  outputRange: [5, 1],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          }}
          resizeMode="cover"
          source={{uri: imageURL}}
        />
      </SharedElement>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{flexGrow: 1}}
        scrollEventThrottle={16}
        style={{paddingTop: IMAGE_HEIGHT}}>
        {children}
      </Animated.ScrollView>
    </Screen>
  );
};
