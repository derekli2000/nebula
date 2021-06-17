import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import {AnimeOverview} from '../../types/anime';
import {Seperator} from '../../ui/seperator';
import {Box, Spacing} from '../../ui/theme';
import {DetailCard} from './detail-card';

interface DetailedCardListProps {
  title: string;
  data: AnimeOverview[];
  noScrollView: boolean;
}

export const DetailedCardList = ({
  title,
  data,
  noScrollView,
}: DetailedCardListProps) => {
  const navigation = useNavigation();

  let list;
  if (noScrollView) {
    list = (
      <Box paddingLeft="p32" paddingRight="screenInset">
        {data.map((item, index) => (
          <Box key={item.id}>
            <DetailCard {...{navigation, item}} />
            {index !== data.length - 1 && (
              <Seperator vertical={false} spacing="p20" />
            )}
          </Box>
        ))}
      </Box>
    );
  } else {
    list = (
      <FlatList
        data={data}
        renderItem={({item}) => <DetailCard {...{navigation, item}} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingLeft: Spacing.p32,
          paddingRight: Spacing.screenInset,
        }}
        ItemSeparatorComponent={() => (
          <Seperator vertical={false} spacing="p20" />
        )}
        showsHorizontalScrollIndicator={false}
      />
    );
  }

  return (
    <Box>
      <Box paddingHorizontal="screenInset" paddingBottom="p8">
        <Text h4 style={{fontWeight: 'bold'}}>
          {title}
        </Text>
      </Box>
      {list}
    </Box>
  );
};
