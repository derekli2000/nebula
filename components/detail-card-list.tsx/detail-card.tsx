import {nanoid} from 'nanoid';
import React, {useRef} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {SharedElement} from 'react-navigation-shared-element';
import {AnimeOverview} from '../../types/anime';
import {Seperator} from '../../ui/seperator';
import {Box} from '../../ui/theme';

interface DetailCardProps {
  navigation: any;
  item: AnimeOverview;
}

export const DetailCard = ({navigation, item}: DetailCardProps) => {
  const fromNodeId = useRef(nanoid()).current;
  const onPress = () => {
    navigation.navigate('anime-info', {...item, fromNodeId});
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{overflow: 'hidden'}}>
      <Box
        flexDirection="row"
        backgroundColor="backgroundSecondary"
        borderRadius="p8"
        padding="p8">
        <SharedElement id={fromNodeId}>
          <Image
            source={{uri: item.poster_url}}
            style={{height: 137, width: 97, borderRadius: 8}}
          />
        </SharedElement>
        <Seperator vertical />
        <Box flexDirection="column" flex={1}>
          <Text
            style={{marginTop: 4, fontWeight: 'bold', fontSize: 18}}
            numberOfLines={2}>
            {item.english_title}
          </Text>
          <Text style={{marginTop: 4, fontSize: 12, flex: 1}} numberOfLines={3}>
            {item.description}
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box alignItems="center" paddingVertical="p4" flexDirection="row">
              <Icon name="star" />
              <Text style={{fontSize: 14, marginLeft: 4, color: 'white'}}>
                {item.score.toFixed(1)}
              </Text>
            </Box>
            <Box
              alignSelf="center"
              paddingVertical="p4"
              flexDirection="row"
              backgroundColor="green"
              borderRadius="p8"
              padding="p4">
              <Text style={{fontSize: 12, color: 'white'}}>{item.status}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
