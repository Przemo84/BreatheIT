import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const ButtonPlayComponent = (props) => {

    const { title, setTitle } = useState('');
    const { image, setImage } = useState('');
    const { play, setPlay } = useState('');
    const { frequency, setFrequency } = useState('');

    return (
        <TouchableOpacity style={styles.touchableCard} onPress={props.onPress}>
            <ImageBackground source={props.image} style={styles.image} imageStyle={{ borderRadius: 14 }} onPress={props.onPress} >
                <View style={{ flex: 3 }}>
                    <View style={styles.titleViewStyle}>
                        <Text style={styles.titleText}>{props.title}</Text>
                    </View>
                </View>
                <View style={{ flex: 2, flexDirection: 'row' }}>
                    <View style={styles.playStyle}>
                        <Image source={props.play} style={styles.playImage} />
                    </View>
                    <View style={styles.frequency}>
                        <Text style={styles.frequencyText}>{props.frequency}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableCard: {
        backgroundColor: 'white',
        borderRadius: 14,
        minHeight: 140,
        margin: 22
    },
    image: {
        width: 'auto',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    titleViewStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 6
    },

    titleText: {
        color: '#696969',
        fontSize: 14
    },

    playStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 8
    },

    playImage: {
        height: 40,
        width: 40,
        opacity: 0.8
    },

    frequency: {
        flex: 1,
        flexDirection: 'row-reverse',
        color: 'white',
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        fontSize: 12,
        margin: 4,
    },

    frequencyText: {
        color: 'rgba(243, 243, 243, 0.9)',
        fontSize: 14,
        opacity: 5
    }

});

export default ButtonPlayComponent;
