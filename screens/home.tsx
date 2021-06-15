import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {FeaturedCarousel} from '../components/featured-carousel';
import {NonFeaturedCarousel} from '../components/non-featured-carousel';
import {Screen} from '../ui/layout/screen';
import {Seperator} from '../ui/seperator';
import {Box} from '../ui/theme';

const data = [
  {
    title: 'A short title',
    url: 'https://source.unsplash.com/random?a',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?b',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?c',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?d',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?e',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?f',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?g',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?h',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?i',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?j',
  },
  {
    title: 'A really long title is problematic',
    url: 'https://source.unsplash.com/random?k',
  },
];

export const Home = () => {
  // const [darkMode, setDarkMode] = useRecoilState(isDarkModeAtom);

  return (
    <Screen disablePadding>
      <Box
        justifyContent="center"
        flexDirection="row"
        paddingHorizontal="screenInset"
        paddingBottom="p8"
        alignItems="flex-end">
        <Text h2>nebula</Text>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedCarousel data={data} />
        <Seperator />
        <NonFeaturedCarousel title="Recommended" />
        <Seperator />
        <NonFeaturedCarousel title="Recommended" />
        <Seperator />
      </ScrollView>
    </Screen>
  );
};
