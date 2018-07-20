const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    width: Dimensions.get('window').width - 20,
    alignItems: 'flex-start',
    flex: 9
  },
})