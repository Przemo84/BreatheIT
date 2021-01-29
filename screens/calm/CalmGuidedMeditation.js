import React from 'react';
import {View, StyleSheet, Button, Text, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const image = require('../../assets/bg-lake.jpg');

const CalmGuidedMeditation = (props) => {
    return(
        <ImageBackground source={image} style={{ width: '100%', flex: 1, alignItems: 'stretch', alignContent: 'stretch' }}>
        <View style={{ flexDirection: "column"}}>
          <View style={{ flex: 1, borderColor: 'red'}}></View>
          <View style={{ borderColor: 'green', flex: 1, paddingTop: 50, minHeight: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: 'white' }}>Calm It/</Text>
            <Text style={{ fontSize: 22, color: 'white' }}>Guided Meditation</Text>
          </View>
          <View style={{ flex: 1,borderColor: 'red'}}></View>
        </View>
      </ImageBackground>
    )
};


const styles = StyleSheet.create({});

export default CalmGuidedMeditation;