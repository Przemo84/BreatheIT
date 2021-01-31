import React from 'react';
import { View, StyleSheet, Button, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ButtonWithContentCompotent from '../../components/buttons/nav-buttons/ButtonWithContentComponent';

const image = require('../../assets/bg-lake.jpg');

const CalmAcupressure = (props) => {
  return (
    <ImageBackground source={image} style={{ width: '100%', flex: 1, alignItems: 'stretch', alignContent: 'stretch' }}>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}></View>
        <View style={{ flex: 1, borderColor: 'green', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, color: 'white' }}>Calm It/</Text>
          <Text style={{ fontSize: 22, color: 'white' }}>Acupressure</Text>
        </View>
        <View style={{ flex: 5, borderColor: 'red', borderWidth: 1 }}>
          <ButtonWithContentCompotent title="Nowy tytuł" content="Some Content" onPress={() => props.navigation.navigate('CalmNew')} />
        </View>
        <View style={{ flex: 1, borderColor: 'yellow', borderWidth: 1 }}></View>
      </View>
    </ImageBackground>
  )
};


const styles = StyleSheet.create({});

export default CalmAcupressure;