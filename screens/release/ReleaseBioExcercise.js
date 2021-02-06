import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import ButtonFeatureComponent from '../../components/buttons/buttons/ButtonFeatureComponent';

const image = require('../../assets/bg-lake.jpg');
const imageButton1 = require('../../assets/images/release/face.png');
const imageButton2 = require('../../assets/images/release/swing.png');
const imageButton3 = require('../../assets/images/release/bend.png');
const imageButton4 = require('../../assets/images/release/squirm.png');
const playButton = require('../../icons/play-button.png');

const ReleaseBioExcercise = (props) => {
  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <View style={{ flex: 1 }}>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={{ fontSize: 24, color: 'white' }}>Release It/</Text>
      </View>
      <View style={styles.subtitleWrapper}>
        <Text style={{ fontSize: 24, color: 'white' }}>Bioenergotherapic Excercise</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonTopRow}>
          <View style={styles.halfWidth}>
            <ButtonFeatureComponent image={imageButton1} />
          </View>
          <View style={styles.halfWidth} >
            <ButtonFeatureComponent image={imageButton2} />
          </View>
        </View>
        <View style={styles.buttonBottomRow}>
          <View style={styles.halfWidth}>
            <ButtonFeatureComponent image={imageButton3} />
          </View>
          <View style={styles.halfWidth} >
            <ButtonFeatureComponent image={imageButton4} />
          </View>
        </View>
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
});

export default ReleaseBioExcercise;