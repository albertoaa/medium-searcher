import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {connect} from 'react-redux';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.searchResultsContainer}>
        {this.props.results.map((result, key) => (<Text key={key}>{result.title}</Text>))}
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