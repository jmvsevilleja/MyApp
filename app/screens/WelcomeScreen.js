import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={style.background}
            source={require("../assets/splash.png")}
        ></ImageBackground>
    );
}

const style = StyleSheet.create({
    background: {
        flex: 1,
    }
})
export default WelcomeScreen;