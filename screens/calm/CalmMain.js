import React from 'react';
import { View, Text, Image, Button, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import ButtonWithoutContentComponent from '../../components/buttons/nav-buttons/ButtonWithoutContentComponent'

function CalmMain(props) {

  const image = require('../../assets/bg-lake.jpg');

  return (
    <ImageBackground source={image} style={styles.calmBackgroundStyle}>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}></View>
        <View style={styles.calmTitleView}>
          <Text style={styles.calmTitleText}>Calm It</Text>
        </View>
        <View style={{ flex: 12, borderColor: 'yellow', borderWidth: 1 }}>
          <ButtonWithoutContentComponent title='Guided Meditation' onPress={() => props.navigation.navigate('CalmGuidedMeditation')} />
          <ButtonWithoutContentComponent title='Breathing Techniques' />
          <ButtonWithoutContentComponent title='Calming Music' />
          <ButtonWithoutContentComponent title='Acupressure' onPress={() => props.navigation.navigate('CalmAcupressure')} />
        </View>
        <View style={styles.soundViewStyle}>
          <Image source={require('../../icons/volume.png')} style={styles.soundIconStyle} />
        </View>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  calmBackgroundStyle: {
    width: '100%',
    flex: 1,
    alignItems: 'stretch',
    alignContent: 'stretch'
  },
  calmTitleView: {
    borderColor: 'green',
    borderWidth: 1, flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calmTitleText: {
    fontSize: 24,
    color: 'white'
  },
  soundViewStyle: {
    flexDirection: 'row-reverse',
    flex: 1,
    borderColor: 'red',
    borderWidth: 1
  },
  soundIconStyle: {
    width: 30,
    height: 30,
    marginRight: 20
  }
})

export default CalmMain;