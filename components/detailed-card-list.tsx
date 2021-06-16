import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import {Icon, Image, Text} from 'react-native-elements';
import {AnimeOverview} from '../types/anime';
import {Seperator} from '../ui/seperator';
import {Box} from '../ui/theme';

interface DetailedCardListProps {
  title: string;
  data: AnimeOverview[];
}

export const DetailedCardList = ({title, data}: DetailedCardListProps) => {
  const navigation = useNavigation();

  const _renderItem: ListRenderItem<typeof data[number]> = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('anime-info', item)}
        style={{overflow: 'hidden'}}>
        <Box
          flexDirection="row"
          backgroundColor="backgroundSecondary"
          borderRadius="p8"
          padding="p8">
          <Image
            source={{uri: item.poster_url}}
            style={{height: 137, width: 97, borderRadius: 8}}
          />
          <Seperator vertical />
          <Box flexDirection="column" flex={1}>
            <Text
              style={{marginTop: 4, fontWeight: 'bold', fontSize: 18}}
              numberOfLines={2}>
              {item.english_title}
            </Text>
            <Text
              style={{marginTop: 4, fontSize: 12, flex: 1}}
              numberOfLines={3}>
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
                <Text style={{fontSize: 12, color: 'white'}}>
                  {item.status}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <Box>
      <Box paddingHorizontal="screenInset" paddingBottom="p8">
        <Text h4 style={{fontWeight: 'bold'}}>
          {title}
        </Text>
      </Box>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingLeft: 32,
          paddingRight: 12,
        }}
        ItemSeparatorComponent={() => (
          <Seperator vertical={false} spacing="p20" />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
};
