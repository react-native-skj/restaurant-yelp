import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

const ItemList = ({ results, navigation }) => {
  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.id}
      data={results}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.view}
          onPress={() => navigation.navigate('ItemDetail', { id: item.id })}
        >
          <Image
            style={styles.image}
            source={{ uri: item.image_url }}
            accessibilityLabel={item.name}
          />
          <Text style={styles.name}>{item.name}</Text>
          <Text>
            Rating: {item.rating} Reviews: {item.review_count}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default withNavigation(ItemList);

const styles = StyleSheet.create({
  view: {
    marginHorizontal: 6,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});
