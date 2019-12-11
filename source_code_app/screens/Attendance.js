import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
const styles = StyleSheet.create(require('../stylesheet'));
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import '../global.js';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';

export default class Attendance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1, textAlign: 'center', padding: 15}}>
        <Text>{"\n"}</Text>
      </ScrollView>
    );
  }
}

Attendance.navigationOptions = {
  title: 'Chapter Attendance',
  header: null,
};