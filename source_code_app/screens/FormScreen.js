import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const styles = StyleSheet.create(require('../stylesheet'));
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import t from 'tcomb-form-native';

const User = t.struct({
  firstName: t.String,
  lastName: t.String,
  email: t.String,
  password: t.String,
});
const Form = t.form.Form;

export default class FormScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1, textAlign: 'center'}}>
        <Form type={User} />
        <Button
          title="Sign Up"
          onPress={() => {
            navigate("Home");
          }}
        />
      </ScrollView>
    );
  }
}

FormScreen.navigationOptions = {
  title: 'Form',
};
