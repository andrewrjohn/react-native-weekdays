// Import the code we need
import React, {Component} from 'react';
import {View, Text, AppRegistry} from 'react-native';

// Create a React Component
var Weekdays  = React.createClass({
  render: function () {
    return <View>
    <Text>
      Days of the week:
    </Text>
    </View>
  }
});

// Show the React component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
