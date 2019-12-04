import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View, AsyncStorage } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const styles = StyleSheet.create(require('../stylesheet'));
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class EventsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {daySelected: "today"};

  render() {
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1, textAlign: 'center'}}>
        <Calendar
          onDayPress={(day) => {this.setState({daySelected: day.dateString})}}
          onDayLongPress={(day) => {console.log('selected day', day)}}
          style={{
            height: 350
          }}
          theme={{
            backgroundColor: global.color3,
            calendarBackground: global.color2,
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: global.textColor,
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: global.textColor,
            indicatorColor: global.textColor,
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        />
        <Text style={styles.left,{color: global.textColor, fontWeight: 'bold', textAlign:'center'}}>{"\n"}No events on {this.state.daySelected}.</Text>
      </ScrollView>
    );
  }
}

EventsScreen.navigationOptions = {
  title: 'Events',
};
