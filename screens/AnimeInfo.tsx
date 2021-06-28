import React, {useRef} from 'react';
import {Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Icon, Text} from 'react-native-elements';
import ImageHeaderScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import {Anime} from '../types/Anime';
import {Screen} from '../ui/Layout/Screen';
import {Box} from '../ui/Theme';

export const AnimeInfo = ({navigation, route}: any) => {
  const item: Anime = route.params;
  const stickyHeaderRef = useRef<any>();

  const insets = useSafeAreaInsets();

  return (
    <Screen disableSafeArea disablePadding>
      <ImageHeaderScrollView
        minHeight={100}
        maxHeight={350}
        // @ts-ignore
        renderHeader={() => (
          <Box backgroundColor="background">
            <SharedElement id={`item.${item.mal_id}.featured`}>
              <Image
                source={{
                  uri: item.image_url,
                }}
                style={{
                  width: '100%',
                  height: 350,
                  borderBottomLeftRadius: 32,
                  borderBottomRightRadius: 32,
                }}
                resizeMode="cover"
              />
            </SharedElement>
          </Box>
        )}
        // @ts-ignore
        renderFixedForeground={() => (
          <Animatable.View
            style={{
              paddingTop: insets.top,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            }}
            ref={stickyHeaderRef}>
            <Text
              h4
              numberOfLines={1}
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}>
              {item.title}
            </Text>
            <Box
              alignSelf="flex-start"
              paddingVertical="p4"
              flexDirection="row">
              <Icon name="star" />
              <Text style={{fontSize: 20, marginLeft: 4}}>
                {item.score?.toFixed(1) ?? 'N/A'}
              </Text>
            </Box>
          </Animatable.View>
        )}>
        {/* @ts-ignore */}
        <TriggeringView
          onHide={() => console.log('hello')}
          onDisplay={() => console.log('hello')}>
          <Text
            h4
            numberOfLines={1}
            style={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
          <Box alignSelf="flex-start" paddingVertical="p4" flexDirection="row">
            <Icon name="star" />
            <Text style={{fontSize: 20, marginLeft: 4}}>
              {item.score?.toFixed(1) ?? 'N/A'}
            </Text>
          </Box>
        </TriggeringView>
        <Box height={1000} backgroundColor="background" />
      </ImageHeaderScrollView>
    </Screen>
  );
};

/*
        <Box backgroundColor="background" height={1000}>
          <Separator />
          <Box paddingHorizontal="p12" />
          <Button title="hello" onPress={() => navigation.goBack()} />
          <Separator />
        </Box>
*/
