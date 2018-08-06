const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    flex: 9
  },
  resultLink: {
    display: 'flex',
    backgroundColor: '#ddd',
    borderRadius: 5,
    height: 40,
    width: Dimensions.get('window').width - 10,
    marginVertical: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})