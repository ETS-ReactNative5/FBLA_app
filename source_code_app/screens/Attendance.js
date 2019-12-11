import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

export default class Attendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  //Fetches data from from google sheet that collects attendance data
  makeRemoteRequest = () => {
    const url = `https://spreadsheets.google.com/feeds/list/11_Fcm0i6j56hdyDochpbKbEXGSvevUBQR9kDDs_s3l4/1/public/basic?alt=json`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.feed.entry,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.feed.entry;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: "https://cdn0.iconfinder.com/data/icons/feather/96/clock-512.png" } }}
              title= {`${item.content.$t}`}
              subtitle={`${item.title.$t}`}
            />
          )}
          keyExtractor={item => item.id.$t}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

Attendance.navigationOptions = {
  title: 'Chapter Attendance',
  header: null,
};