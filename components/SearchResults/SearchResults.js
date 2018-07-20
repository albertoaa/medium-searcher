import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const styles = require('./SearchResultsStyles');

export default class SearchResults extends Component {
  render() {
    return(
      <View style={styles.searchResultsContainer}>
        <TouchableOpacity>
          <Text>
            Result 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Result 2
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}