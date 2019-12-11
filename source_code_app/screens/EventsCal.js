import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class EventsCal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        /*markingType={'period'}
        markedDates={{
            '2020-02-06': {startingDay: true, endingDay: true, color: 'lightblue'}, //districts
            '2020-04-22': {startingDay: true, color: 'red'}, //state
            '2020-04-23': {color: 'red'},
            '2020-04-24': {endingDay: true, color: 'red'},
        }}*/
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          switch(strTime){


            //put marked days here
            case "2020-02-06":
              this.makeItem(strTime, "FBLA Disctrict 11 DLC");
              break;
            case "2020-04-22":
              this.makeItem(strTime, "FBLA State Conference Day 1");
              break;
            case "2020-04-23":
              this.makeItem(strTime, "FBLA State Conference Day 2");
              break;
            case "2020-04-24":
              this.makeItem(strTime, "FBLA State Conference Day 3");
              break;

              

            default:
              break;
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text></Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  makeItem(day, mess){
    this.state.items[day].push({
      name: mess,
    });
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: global.color2,
    color: global.textColor,
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

EventsCal.navigationOptions = {
  title: 'Calendar',
};