import * as React from 'react';
import * as Expo from 'expo';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { WebBrowser } from 'expo';
import { Question , FAQ } from '../react-native-faq/index'
 
const questions = [
    {
        question: "Hasfdhelp you?",
        reply: "You have asdf",
    },
    {
        question: "asdf",
        reply: "asdfasdfasdfasdfasdf",
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