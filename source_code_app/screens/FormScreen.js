import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, Button, View, TouchableHighlight } from 'react-native';
const styles = StyleSheet.create(require('../stylesheet'));
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import '../global.js';
import t from 'tcomb-form-native';

//Form data structure
var Person = t.struct({
  firstName: t.String,
  lastName: t.String,
  age: t.Number,
  email: t.String,
  password: t.String
});
const formOptions = {};
const Form = t.form.Form;
const formStyles = t.form.Form.stylesheet;
formStyles.textbox.normal.color = global.textColor;
formStyles.controlLabel.normal.color = global.textColor;

export default class FormScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.profileContainer,{backgroundColor: global.color1, textAlign: 'center', padding: 15}}>
        <Text>{"\n"}</Text>
        <Form
          ref="form"
          type={Person}
          options={formOptions}
        />
        <Button
          title="Sign Up"
          onPress={this.signUp}
        />
      </ScrollView>
    );
  }

  signUp = () => {
    this.props.navigation.navigate("Home");
  }
}

FormScreen.navigationOptions = {
  title: 'Form',
  header: null,
};