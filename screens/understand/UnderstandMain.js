import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import ButtonWithContentComponent from '../../components/nav-buttons/ButtonWithContentComponent'


const UnderstandMain = (props) => {

  const image = require('../../assets/bg-lake.jpg');
  
  return (
    <ImageBackground source={image} style={{ width: '100%', flex: 1, alignItems: 'stretch', alignContent: 'stretch' }}>
      <View style={{ paddingTop:50, minHeight: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, color: 'white' }}>Understand It</Text>
      </View>
      <ButtonWithContentComponent title='Anger Diary' content='CBT-style diary to record the causes 
      and consequences of episodes of anger. You are encouraged to 
      record triggers, emotions, body sensations, thoughts, behaviours, and conssequences.
      ' />
      <ButtonWithContentComponent title='Thinking Habits' content='Change your mental pattern and you change your emotion'/>

      {/* <Button
          title="CalmDetails"
          onPress={() => props.navigation.navigate('CalmDetails')}
        /> */}
    </ImageBackground>
  );
}

export default UnderstandMain;