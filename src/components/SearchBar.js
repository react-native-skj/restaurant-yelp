import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchText, onChange, onSubmitted }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={30} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={searchText}
        onChangeText={onChange}
        onEndEditing={onSubmitted}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 10,
    margin: 20,
    padding: 5,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 18,
  },
});
