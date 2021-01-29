import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonWithoutContentComponent = (props) => {

    const { title, setTitle } = useState('');
    const { content, setContent } = useState('');


    return (
        <TouchableOpacity style={styles.touchableCard} onPress={props.onPress}>
            <View style={{ flexDirection: 'row'}}>
                <View style={{ paddingLeft: 34, flex: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                    {/* <View style={{ padding: 10, flex: 1 }}> */}
                    <Text style={{ opacity: 25, color: 'white', fontSize: 22 }}>{props.title}</Text>
                    {/* </View> */}
                </View>
                <Icon title='right'></Icon>
                <View style={styles.rightIconViewStyle}>
                    <Text>
                        <Icon size={44} name="right" color="white" />
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableCard: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        marginLeft:32,
        marginRight:34,
        marginTop: 16,
        marginBottom:8,
        borderRadius: 8,
        minHeight: 90
    },
    rightIcon: {
        flexDirection: 'column',
        flex: 1,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ButtonWithoutContentComponent;
