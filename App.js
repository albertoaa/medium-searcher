import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <SearchResults/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
