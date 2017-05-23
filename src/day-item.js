// Import the code we need
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

// Create a React Component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
    A day of the week
    </Text>
  }
});

// Style the react component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#000fff'
  }
});

// Make this code available elsewhere
module.exports = DayItem;
