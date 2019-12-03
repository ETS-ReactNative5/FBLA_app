import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const styles = StyleSheet.create(require('../stylesheet'));
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import t from 'tcomb-form-native';

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});
const Form = t.form.Form;

export default class FormScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1, textAlign: 'center'}}>
        <Form type={User} />
      </ScrollView>
    );
  }
}

FormScreen.navigationOptions = {
  title: 'Form',
};
