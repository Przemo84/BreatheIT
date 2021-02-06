import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import ButtonFeatureComponent from '../../components/buttons/buttons/ButtonFeatureComponent';

const image = require('../../assets/bg-lake.jpg');
const imageButton1 = require('../../assets/images/release/yoga1.png');
const imageButton2 = require('../../assets/images/release/yoga2.png');

const playButton = require('../../icons/play-button.png');

const ReleaseYoga = (props) => {
  return (
    <ImageBackground source={image} style={styles.imageBackground}>
      <View style={{ flex: 1 }}>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={{ fontSize: 24, color: 'white' }}>Release It/</Text>
      </View>
      <View style={styles.subtitleWrapper}>
        <Text style={{ fontSize: 24, color: 'white' }}>Yoga</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonTopRow}>
          <View style={styles.halfWidth}>
            <ButtonFeatureComponent image={imageButton1} play={playButton} />
          </View>
          <View style={styles.halfWidth} >
            <ButtonFeatureComponent image={imageButton2} play={playButton} />
          </View>
        </View>
        <View style={styles.soundViewStyle}>
          <Image source={require('../../icons/volume.png')} style={styles.soundIconStyle} />
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
    alignSelf: 'flex-end',
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

export default ReleaseYoga;