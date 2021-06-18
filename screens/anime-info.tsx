import React from 'react';
import {Image, View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {SharedElement} from 'react-navigation-shared-element';
import {Screen} from '../ui/layout/screen';
import {Seperator} from '../ui/seperator';
import {Box} from '../ui/theme';

export const AnimeInfo = ({navigation, route}: any) => {
  const item = route.params;
  return (
    <Screen disableSafeArea disablePadding>
      <SharedElement id={`item.${item.id}.featured`}>
        <Image
          source={{
            uri: item.poster_url,
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
      <Seperator />
      <Box paddingHorizontal="p12">
        <SharedElement id={`item.${item.id}.title`}>
          <View>
            <Text
              h4
              numberOfLines={1}
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
              }}>
              {item.english_title}
            </Text>
            <Box
              alignSelf="flex-start"
              paddingVertical="p4"
              flexDirection="row">
              <Icon name="star" />
              <Text style={{fontSize: 20, marginLeft: 4}}>
                {item.score.toFixed(1)}
              </Text>
            </Box>
          </View>
        </SharedElement>
      </Box>
      <Seperator grow />
      <Button title="hello" onPress={() => navigation.goBack()} />
      <Seperator />
    </Screen>
  );
};
