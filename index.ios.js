// Import the code we need
import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';

var DayItem = require('./src/day-item');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Create a React Component
var Weekdays  = React.createClass({
  render: function () {
    return <View style={styles.container}>
    <Text>
      Days of the week:
    </Text>
    <DayItem />
    </View>
  }
});

// Style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //height
    alignItems: 'center' //width

  }
})

// Show the React component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
