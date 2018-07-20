const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  searchBarContainer: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 2,
    marginVertical: 10,
    borderColor: 'lightgray',
    flex: 1
  },
  textInputSearch: {
    flex: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    paddingLeft: 10
  },
  textSearchButton: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40
  }
})