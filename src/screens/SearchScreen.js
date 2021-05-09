import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('pasta');
  const [performSearch, results, errorMessage] = useSearch();

  return (
    <View>
      <SearchBar
        searchText={searchText}
        onChange={setSearchText}
        onSubmitted={() => performSearch(searchText)}
      />
      {errorMessage ? <Text>errorMessage</Text> : null}
      <ResultList results={results} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
