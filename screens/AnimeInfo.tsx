import React from 'react';
import {Image, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {SharedElement} from 'react-navigation-shared-element';
import {Anime} from '../types/Anime';
import {Screen} from '../ui/Layout/Screen';
import {Separator} from '../ui/Separator';
import {Box} from '../ui/Theme';

export const AnimeInfo = ({navigation, route}: any) => {
  const item: Anime = route.params;

  return (
    <Screen disableSafeArea disablePadding>
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
      <Separator />
      <Box paddingHorizontal="p12">
        <SharedElement id={`item.${item.mal_id}.title`}>
          <View>
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
          </View>
        </SharedElement>
      </Box>
      <Separator grow />
      <Button title="hello" onPress={() => navigation.goBack()} />
      <Separator />
    </Screen>
  );
};
