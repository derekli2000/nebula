import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {Seperator} from '../ui/seperator';
import {Box, Spacing} from '../ui/theme';

interface NonFeaturedCarouselProps {
  title: string;
}

export const NonFeaturedCarousel = ({title}: NonFeaturedCarouselProps) => {
  const renderItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity>
        <Box
          height={134}
          width={87}
          backgroundColor="blue"
          borderRadius="p8"
          marginBottom="p4"
        />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Box>
      <Box paddingHorizontal="screenInset" paddingBottom="p8">
        <Text h3>{title}</Text>
      </Box>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingHorizontal: Spacing.screenInset + Spacing.p12,
        }}
        ItemSeparatorComponent={() => <Seperator vertical spacing="p20" />}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bv',
    title: 'Fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6v',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dv',
    title: 'Sixth Item',
  },
];
