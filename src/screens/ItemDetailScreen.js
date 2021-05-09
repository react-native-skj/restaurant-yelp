import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ItemDetailScreen = ({ navigation }) => {
  const [item, setItem] = useState(null);
  const id = navigation.getParam('id');

  const getDetail = async () => {
    try {
      const { data } = await yelp.get(`/${id}`);
      setItem(data);
    } catch (e) {}
  };

  useEffect(() => {
    getDetail();
  }, []);

  if (!item) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.name}>
        {item.name} ph: {item.display_phone}
      </Text>
      <Text>
        {item.rating} stars, {item.review_count} reviews
      </Text>
      <FlatList
        keyExtractor={(photo) => photo}
        data={item.photos}
        renderItem={({ item: photo }) => (
          <Image source={{ uri: photo }} style={styles.photo} />
        )}
      />
    </View>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
  },
  photo: {
    height: 150,
    width: 250,
    borderRadius: 15,
    marginVertical: 10,
  },
});
