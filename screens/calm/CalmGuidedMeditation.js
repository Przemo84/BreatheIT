import React from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground } from 'react-native';
import ButtonPlayComponent from '../../components/buttons/play-buttons/ButtonPlayComponent';

const image = require('../../assets/bg-lake.jpg');
const imageButton1 = require('../../assets/images/calm-alpine-alps.jpg');
const imageButton2 = require('../../assets/images/calm-clouds-water.jpg');
const imageButton3 = require('../../assets/images/calm-mountains.jpg');
const imageButton4 = require('../../assets/images/calm-beach-rocks.jpg');

const CalmGuidedMeditation = (props) => {
  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <View style={{ flex: 1 }}>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={{ fontSize: 24, color: 'white' }}>Calm It/</Text>
      </View>
      <View style={styles.subtitleWrapper}>
        <Text style={{ fontSize: 24, color: 'white' }}>Guided Meditation</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonTopRow}>
          <View style={styles.halfWidth}>
            <ButtonPlayComponent image={imageButton1} title='alternative nostril breathing' /* onPress={() => props.navigation.navigate('CalmGuidedMeditation')} */ />
          </View>
          <View style={styles.halfWidth} >
            <ButtonPlayComponent image={imageButton2} title='' /* onPress={() => props.navigation.navigate('CalmGuidedMeditation')}*/ />
          </View>
        </View>
        <View style={styles.buttonBottomRow}>
          <View style={styles.halfWidth}>
            <ButtonPlayComponent image={imageButton3} title='alternative nostril breathing' /* onPress={() => props.navigation.navigate('CalmGuidedMeditation')} */ />
          </View>
          <View style={styles.halfWidth} >
            <ButtonPlayComponent image={imageButton4} title='' /* onPress={() => props.navigation.navigate('CalmGuidedMeditation')}*/ />
          </View>
        </View>
      </View>
      <View style={styles.soundViewStyle}>
        <Image source={require('../../icons/volume.png')} style={styles.soundIconStyle} />
      </View>
    </ImageBackground>
  )
};


const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    flex: 1,
    borderColor: 'red',
    borderWidth: 2
  },

  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center'
  },

  subtitleWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'yellow',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center'
  },

  buttonsWrapper: {
    flex: 12,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderColor: 'green',
    borderWidth: 2
  },
  soundViewStyle: {
    flexDirection: 'row-reverse',
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  soundIconStyle: {
    width: 30,
    height: 30,
    marginRight: 20
  },

  buttonTopRow: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'pink',
    borderWidth: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  buttonBottomRow: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1
  },

  halfWidth: {
    width: 'auto',
    flex: 1,
    borderColor: 'blue',
    borderWidth: 2,
  }

  // wrapper: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  //   borderColor: 'red',
  //   backgroundColor: 'yellow',
  //   borderWidth: 2,
  // }
});

export default CalmGuidedMeditation;