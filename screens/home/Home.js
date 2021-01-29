import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

import CalmMain from '../calm/CalmMain';
import ButtonWithContentComponent from '../../components/ButtonWithContentComponent';


const Home = (props, navigation) => {

    const image = require('../../assets/bg-lake.jpg');

    return (
        <ImageBackground source={image} style={styles.imageHome}>
            <ButtonWithContentComponent title='Calm It' content='First calm down' onPress={() => props.navigation.navigate('CalmMain')} />
            <ButtonWithContentComponent title='Understand It' content='Understand your anger' onPress={() => props.navigation.navigate('UnderstandMain')} />
            <ButtonWithContentComponent title='Release It' content='Do some excercise' onPress={() => props.navigation.navigate('ReleaseMain')} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    touchableCard: {
        backgroundColor: 'white',
        opacity: 0.15,
        margin: 40,
        borderRadius: 8,
        minHeight: 100
    },
    rightIcon: {
        flexDirection: 'column',
        flex: 1,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageHome: {
        width: '100%',
        flex: 1,
        alignItems: 'stretch',
        alignContent: 'stretch'
    }
});

export default Home;