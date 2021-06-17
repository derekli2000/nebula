import React from 'react';
import {Button, Image} from 'react-native-elements';
import {SharedElement} from 'react-navigation-shared-element';
import {Screen} from '../ui/layout/screen';
import {Seperator} from '../ui/seperator';

export const AnimeInfo = ({navigation, route}) => {
  const item = route.params;
  return (
    <Screen disableSafeArea disablePadding>
      <SharedElement id={`item.${item.id}.featured`}>
        <Image
          source={{
            uri: 'https://source.unsplash.com/random?a',
          }}
          style={{
            width: '100%',
            height: 300,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
      </SharedElement>
      <Seperator grow />
      <Button title="hello" onPress={() => navigation.goBack()} />
      <Seperator />
    </Screen>
  );
};

AnimeInfo.sharedElements = (route: any) => {
  const item = route.params;

  return [`item.${item.id}.featured`];
};
