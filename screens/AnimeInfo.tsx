import React from 'react';
import {Button, Icon, Text} from 'react-native-elements';
import {Anime} from '../types/Anime';
import {StretchyScrollView} from '../ui/Layout/StretchyScrollView';
import {Separator} from '../ui/Separator';
import {Box} from '../ui/Theme';

export const AnimeInfo = ({navigation, route}: any) => {
  const item: Anime = route.params;

  return (
    <StretchyScrollView
      imageID={`item.${item.mal_id}.featured`}
      imageURL={item.image_url}>
      <Text
        h4
        numberOfLines={1}
        style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}>
        {item.title}
      </Text>

      <Box backgroundColor="background" height={2000}>
        <Box alignSelf="flex-start" paddingVertical="p4" flexDirection="row">
          <Icon name="star" />
          <Text style={{fontSize: 20, marginLeft: 4}}>
            {item.score?.toFixed(1) ?? 'N/A'}
          </Text>
        </Box>

        <Separator />
        <Box paddingHorizontal="p12" />
        <Button title="hello" onPress={() => navigation.goBack()} />
      </Box>
    </StretchyScrollView>
  );
};
