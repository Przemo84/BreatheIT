import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Home from '../Home';

const Understand = props => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/home_screen.png")}
                    style={styles.image}>
                    <View>
                        <Text style={styles.text_title}>
                            CALM IT {textOnButton}
                        </Text>

                        <Text style={styles.text_description}>
                            Everytime you resist acting on your anger, you actually
                            rewriting your brain to be calmer and more loving
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_title: {

        color: "white",
        fontSize: 28,
        textAlign: "center",
        paddingBottom: 40
    },
    text_description: {
        justifyContent: "space-evenly",
        alignSelf: "center",
        maxWidth: "60%",
        color: "white",
        fontSize: 14,
        textAlign: "center",
    },
    button: {
        flex: 1,
    }
});

export default Understand;