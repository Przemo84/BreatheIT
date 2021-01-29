import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonWithContentComponent = (props) => {

    const { title, setTitle } = useState('');
    const { content, setContent } = useState('');


    return (
        <TouchableOpacity style={styles.touchableCard} onPress={props.onPress}>
            <View style={{ flexDirection: 'row', minHeight: 100 }}>
                <View style={{ paddingLeft: 34, flex: 6, flexDirection: 'column', alignContent: 'flex-start', padding: 5 }}>
                    <View style={{ paddingTop: 10, paddingBottom: 5, flex: 1 }}>
                        <Text style={{ opacity: 8, color: 'white', fontSize: 24 }}>{props.title}</Text>
                    </View>
                    <View style={styles.contentViewStyle}>
                        <Text style={styles.contentTextStyle}>{props.content}</Text>
                    </View>
                </View>
                <View style={styles.rightIconViewStyle}>
                    <Image source={require('../icons/forward.png')} style={styles.rightIconStyle} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableCard: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        margin: 50,
        borderRadius: 8,
        minHeight: 100,

    },
    rightIconViewStyle: {
        flexDirection: 'column',
        flex: 1,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIconStyle: {
        width: 70,
        height: 70
    },
    contentViewStyle: {
        paddingTop: 5,
        paddingBottom: 10,
        flex: 1
    },
    contentTextStyle: {
        color: 'white',
        fontSize: 16
    }
});

export default ButtonWithContentComponent;
