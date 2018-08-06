import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';

import {connect} from 'react-redux';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.searchResultsContainer}>
        {this.props.results.map((result, key) => (
          <TouchableOpacity 
            onPress={() => { Linking.openURL(result.formattedUrl) }}
            style={styles.resultLink}
          >
            <Text key={key}>{result.title}</Text>
          </TouchableOpacity>
          ))}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  };
}

export default connect(mapStateToProps, null)(SearchResults);