import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ItemList from './ItemList';

const MAPPING = {
  $: 'Cost Effective',
  $$: 'Bit Pricer',
  $$$: 'Big Spender',
  $$$$: 'Super Expensive',
};

const groupBy = (arr, property) => {
  return arr.reduce((acc, cur) => {
    acc[MAPPING[cur[property]]] = [...(acc[MAPPING[cur[property]]] || []), cur];
    return acc;
  }, {});
};

const ResultList = ({ results }) => {
  const groupedData = groupBy(results, 'price');

  return (
    <View>
      <Text>Search Result: {results.length}</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={Object.values(MAPPING).filter((key) => !!groupedData[key])}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>
              {item} ({groupedData[item].length})
            </Text>
            <ItemList results={groupedData[item]} />
          </View>
        )}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
