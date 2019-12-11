import React, {useState, Icon} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Switch, Platform, StatusBar, StyleSheet, View, ScrollView, Text, Button } from 'react-native';
import { HeaderBackButton } from "react-navigation-stack";
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
const styles = StyleSheet.create(require('../stylesheet'));

export default class EventsList extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ScrollView style={styles.container,{textAlign: 'left'}}>
            <Text style={styles.licenseText}>
                <Text style={{textAlign: 'center'}}>
                    FBLA Events{"\n"} 
                    
                </Text>
                {"\n\n"}
                3-D Animation
                Accounting I
                Accounting II
                Advertising
                Agribusiness
                American Enterprise Project
                Banking & Financial Systems
                Broadcast Journalism
                Business Calculations
                Business Communication (FBLA)
                Business Ethics (FBLA)
                Business Financial Plan
                Business Law (FBLA)
                Business Plan  Modified
                Client Service (FBLA)
                Coding & Programming  Modified
                Community Service Project (FBLA)
                Computer Applications (FBLA)
                Computer Game & Simulation Programming  Modified
                Computer Problem Solving
                Cyber Security (FBLA)
                Database Design & Applications
                Digital Video Production
                E-business  Modified
                Economics
                Electronic Career Portfolio
                Emerging Business Issues (FBLA)
                Entrepreneurship
                Future Business Leader
                Global Business
                Graphic Design
                Health Care Administration
                Help Desk (FBLA)
                Hospitality Management (FBLA)
                Impromptu Speaking (FBLA)
                Insurance & Risk Management
                Introduction to Business  9th & 10th Grade Event
                Introduction to Business Communication  9th & 10th Grade Event
                Introduction to Business Presentation  9th & 10th Grade Event
                Introduction to Business Procedures  9th & 10th Grade Event
                Introduction to FBLA  9th & 10th Grade Event
                Introduction to Financial Math  9th & 10th Grade Event
                Introduction to Information Technology  9th & 10th Grade Event
                Introduction to Parliamentary Procedure  9th & 10th Grade Event
                Introduction to Public Speaking  9th & 10th Grade Event
                Job Interview (FBLA)
                Journalism
                LifeSmarts
                Local Chapter Annual Business Report (FBLA)  Modified
                Management Decision Making
                Management Information Systems
                Marketing
                Mobile Application Development (FBLA)  Modified
                Network Design (FBLA)
                Networking Concepts (FBLA)
                Organizational Leadership
                Parliamentary Procedure (FBLA)
                Partnership with Business Project
                Personal Finance (FBLA)
                Political Science
                Public Service Announcement
                Public Speaking (FBLA)
                Publication Design
                Sales Presentation (FBLA)
                Securities & Investments
                Social Media Campaign
                Sports & Entertainment Management
                Spreadsheet Applications
                Virtual Business Finance Challenge  Modified
                Virtual Business Management Challenge  Modified
                Website Design (FBLA)  Modified
                Word Processing

            </Text>
        </ScrollView>
      );
    }
  }
  
  EventsListStack.navigationOptions = ({ navigation }) => {
    return {
      title: 'EventList',
      header: null,
    };
  }

  /*headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate('More')}
          title="Back"
        />
      ),
  */