import React, { useState } from 'react';
import { TouchableOpacity, FlatList, SafeAreaView, StatusBar, StyleSheet, View, } from 'react-native';
import { useTheme, Text } from 'react-native-elements';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bv",
    title: "Fourth Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f6v",
    title: "Fifth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29dv",
    title: "Sixth Item",
  }
];

export const NonFeaturedCarousel = () => {
  const {theme} = useTheme();

  const [selectedId , setSelectedId] = useState(null)

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      margin: 10,
      borderRadius: 8,
      width: 87.1,
      height: 154
    },
    title: {
      fontSize: 16,
      marginBottom: 10,
      paddingLeft: 10
    },
  });

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = "white"

    return (
      <CarouselCard
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const CarouselCard = ({ item, onPress, backgroundColor, textColor }) => (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]} />
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>
    
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};