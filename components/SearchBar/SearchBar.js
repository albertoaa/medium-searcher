import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = require('./SearchBarStyles');

export default class SearchBar extends Component {
  render() {
    return(

      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder = 'Enter your search terms'
          style = {styles.textInputSearch}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity
          style = {styles.textSearchButton}
        >
          <FontAwesome name="search" size={16} color="#000" />
        </TouchableOpacity>
      </View>
    )
  }
}