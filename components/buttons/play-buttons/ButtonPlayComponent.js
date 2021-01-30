import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonPlayComponent = (props) => {

    const { title, setTitle } = useState('');
    const { image, setImage } = useState('');

    return (
        <TouchableOpacity style={styles.touchableCard} onPress={props.onPress}>
            <Image source={props.image} style={styles.image} onPress={props.onPress}>
                {/* <View style={{ flexDirection: 'row', minHeight: 100, flexWrap: 'wrap' }}>
                <View style={{ paddingLeft: 34, flex: 6, flexDirection: 'column', alignContent: 'flex-start', padding: 5 }}>
                    <View style={{ paddingTop: 10, paddingBottom: 5, flex: 1 }}>
                        <Text style={{ opacity: 8, color: 'white', fontSize: 24 }}>{props.title}</Text>
                    </View>
                </View>
            </View> */}
            </Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchableCard: {
        backgroundColor: 'white',
        borderRadius: 14,
        minHeight: 140,
        margin: 18
    },
    image: {
        width: 'auto',
        flex: 1,
        borderRadius: 14,
    }
});

export default ButtonPlayComponent;
