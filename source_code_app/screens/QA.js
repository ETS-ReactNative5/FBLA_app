import * as React from 'react';
import * as Expo from 'expo';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { WebBrowser } from 'expo';
import { Question , FAQ } from '../react-native-faq/index'
 
const questions = [
    {
        question: "How can I join?",
        reply: "On the main page of this app, there is a signup form. Simply click on 'Sign up for FBLA' to get started.",
    },
    {
        question: "When are the competitions?",
        reply: "The district competition is usally in the winter, in January. The state conference is usually in April, and nationals are usually in late June or July.",
    },
    {
            question: "What events are there to choose from?",
            reply: "There are many events to choose from! Simply go to the events tab to find out.",
    }
]
 
export default class QA extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
 
                <View>
                    <Text style={{ textAlign: 'center' }}></Text>
 
                    <FAQ
                        title='Q&A'
                        questions={questions}
                    />
 
                </View>
 
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: global.color1,
        padding: 8,
    }
});

QA.navigationOptions = {
  title: 'QA',
  header: null,
};