import {nanoid} from 'nanoid';
import React, {useRef} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {SharedElement} from 'react-navigation-shared-element';
import {AnimeOverview} from '../../types/anime';

interface NonFeaturedTileProps {
  item: AnimeOverview;
  navigation: any;
}

export const NonFeaturedTile = ({item, navigation}: NonFeaturedTileProps) => {
  const fromNodeId = useRef(nanoid()).current;
  const onPress = () => {
    navigation.navigate('anime-info', {...item, fromNodeId});
  };

  return (
    <TouchableOpacity onPress={onPress} style={{width: 87}}>
      <SharedElement id={fromNodeId}>
        <Image
          source={{uri: item.poster_url}}
          style={{height: 134, width: 87, borderRadius: 8}}
        />
      </SharedElement>
      <Text style={{marginTop: 4}} numberOfLines={2}>
        {item.english_title}
      </Text>
    </TouchableOpacity>
  );
};
