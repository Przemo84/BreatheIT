import React from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';

import ButtonWithContentComponent from '../../components/buttons/nav-buttons/ButtonWithContentComponent'

const ReleaseMain = (props) => {

  const image = require('../../assets/bg-lake.jpg');

  return (
    <ImageBackground source={image} style={styles.releaseImageBackground}>
      <View style={styles.titleViewStyle}>
        <Text style={styles.titleTextStyle}>Release It</Text>
      </View>
      <ButtonWithContentComponent title='Bioenergotherapic Excercise' content='
        CBT-style diary to record the causes and consequences of episodes of anger. You are encouraged to record
        triggers, emotions, body sensations, thoughts, behaviours, and conssequences.
      ' />
      <ButtonWithContentComponent title='Yoga for Anger' content='
      Change your mental pattern and you change your emotion'/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  releaseImageBackground: {
    width: '100%',
    flex: 1,
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  titleViewStyle: {
    paddingTop: 50,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleTextStyle: {
    fontSize: 24,
    color: 'white'
  }
})

export default ReleaseMain;