import React from 'react';
import {Button} from 'react-native-elements';
import {SharedElement} from 'react-navigation-shared-element';
import {Screen} from '../ui/layout/screen';
import {Box} from '../ui/theme';

export const AnimeInfo = ({navigation, route}: any) => {
  const item = route.params;
  return (
    <Screen disableSafeArea disablePadding>
      {/* <Box width={87}>
        <Image
          source={{uri: item.poster_url}}
          style={{height: 134, borderRadius: 8}}
        />
        <Text style={{marginTop: 4}} numberOfLines={2}>
          {item.english_title}
        </Text>
      </Box> */}
      {/* <SharedElement id={`item.${item.id}.image`}>
        <Image
          source={{
            uri: 'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png',
          }}
          style={{
            width: '100%',
            height: 300,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
      </SharedElement> */}
      <SharedElement id={`item.${item.id}.image`}>
        <Box height={400} width="100%" backgroundColor="red" />
      </SharedElement>
      <Button title="hello" onPress={() => navigation.goBack()} />
    </Screen>
  );
};

AnimeInfo.sharedElements = (route: any) => {
  const item = route.params;

  return [
    {
      id: `item.${item.id}.image`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};
